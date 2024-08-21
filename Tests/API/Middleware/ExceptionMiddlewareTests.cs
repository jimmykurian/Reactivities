// <copyright file="ExceptionMiddlewareTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Middleware
{
    using System.Net;
    using System.Text.Json;
    using Application.Core;
    using Bogus;
    using FluentAssertions;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Hosting;
    using Microsoft.Extensions.Logging;
    using Moq;

    /// <summary>
    /// Unit tests for the <see cref="ExceptionMiddleware"/> class.
    /// </summary>
    [TestClass]
    public class ExceptionMiddlewareTests
    {
        private Mock<RequestDelegate>? nextMock;
        private Mock<ILogger<ExceptionMiddleware>>? loggerMock;
        private Mock<IHostEnvironment>? envMock;
        private ExceptionMiddleware? middleware;
        private Faker? faker;

        /// <summary>
        /// Initializes the test environment before each test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            this.nextMock = new Mock<RequestDelegate>();
            this.loggerMock = new Mock<ILogger<ExceptionMiddleware>>();
            this.envMock = new Mock<IHostEnvironment>();
            this.middleware = new ExceptionMiddleware(this.nextMock.Object, this.loggerMock.Object, this.envMock.Object);
            this.faker = new Faker();
        }

        /// <summary>
        /// Tests that the middleware handles an exception in development environment.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task InvokeAsync_ShouldHandleException_InDevelopment()
        {
            // Arrange
            var exceptionMessage = this.faker!.Lorem.Sentence();
            var exception = new Exception(exceptionMessage);

            this.nextMock!
                .Setup(next => next(It.IsAny<HttpContext>()))
                .Throws(exception);

            this.envMock!
                .Setup(env => env.EnvironmentName)
                .Returns(Environments.Development);

            var context = new DefaultHttpContext();
            context.Response.Body = new MemoryStream();

            // Act
            await this.middleware!.InvokeAsync(context);

            // Assert
            context.Response.StatusCode.Should().Be((int)HttpStatusCode.InternalServerError);
            context.Response.ContentType.Should().Be("application/json");

            context.Response.Body.Seek(0, SeekOrigin.Begin);
            var actualResponseBody = await ReadResponseBodyAsync(context.Response);

            actualResponseBody.Should().Contain("\"details\":\"");
            actualResponseBody.Should().Contain(exceptionMessage);

            this.loggerMock!.Verify(
                logger => logger.Log(
                It.Is<LogLevel>(logLevel => logLevel == LogLevel.Error),
                It.IsAny<EventId>(),
                It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("An unhandled exception occurred while processing the request")),
                exception,
                It.IsAny<Func<It.IsAnyType, Exception?, string>>()),
                Times.Once);
        }

        /// <summary>
        /// Tests that the middleware handles an exception in production environment.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task InvokeAsync_ShouldHandleException_InProduction()
        {
            // Arrange
            var exception = new Exception(this.faker!.Lorem.Sentence());

            this.nextMock!
                .Setup(next => next(It.IsAny<HttpContext>()))
                .Throws(exception);

            this.envMock!
                .Setup(env => env.EnvironmentName)
                .Returns(Environments.Production);

            var context = new DefaultHttpContext();
            context.Response.Body = new MemoryStream();

            var expectedResponse = new AppException(
                (int)HttpStatusCode.InternalServerError,
                "Internal Server Error");
            var expectedJson = JsonSerializer.Serialize(expectedResponse, new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase });

            // Act
            await this.middleware!.InvokeAsync(context);

            // Assert
            context.Response.StatusCode.Should().Be((int)HttpStatusCode.InternalServerError);
            context.Response.ContentType.Should().Be("application/json");

            context.Response.Body.Seek(0, SeekOrigin.Begin);
            var actualResponseBody = await ReadResponseBodyAsync(context.Response);
            actualResponseBody.Should().Be(expectedJson);

            this.loggerMock!.Verify(
                logger => logger.Log(
                It.Is<LogLevel>(logLevel => logLevel == LogLevel.Error),
                It.IsAny<EventId>(),
                It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("An unhandled exception occurred while processing the request")),
                exception,
                It.IsAny<Func<It.IsAnyType, Exception?, string>>()),
                Times.Once);
        }

        /// <summary>
        /// Reads the response body as a string.
        /// </summary>
        /// <param name="response">The HTTP response.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the response body as a string.</returns>
        private static async Task<string> ReadResponseBodyAsync(HttpResponse response)
        {
            response.Body.Seek(0, SeekOrigin.Begin);
            using var reader = new StreamReader(response.Body);
            var body = await reader.ReadToEndAsync();
            response.Body.Seek(0, SeekOrigin.Begin);
            return body;
        }
    }
}
