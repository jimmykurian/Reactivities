// <copyright file="RequestContextLoggingMiddlewareTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Middleware
{
    using FluentAssertions;
    using Microsoft.AspNetCore.Http;
    using Moq;
    using Serilog.Context;

    /// <summary>
    /// Unit tests for the <see cref="RequestContextLoggingMiddleware"/> class.
    /// </summary>
    [TestClass]
    public class RequestContextLoggingMiddlewareTests
    {
        private Mock<RequestDelegate>? nextMiddlewareMock;
        private RequestContextLoggingMiddleware? middleware;

        /// <summary>
        /// Initializes the test environment before each test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            this.nextMiddlewareMock = new Mock<RequestDelegate>();
            this.middleware = new RequestContextLoggingMiddleware(this.nextMiddlewareMock.Object);
        }

        /// <summary>
        /// Tests that the middleware correctly uses the correlation ID from the headers.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task Invoke_ShouldUseCorrelationIdFromHeaders()
        {
            // Arrange
            var correlationId = "test-correlation-id";
            var context = new DefaultHttpContext();
            context.Request.Headers["X-Correlation-ID"] = correlationId;

            // Act
            using (LogContext.PushProperty("CorrelationId", correlationId))
            {
                await this.middleware!.Invoke(context);
            }

            // Assert
            this.nextMiddlewareMock!.Verify(m => m.Invoke(context), Times.Once);
            context.Request.Headers["X-Correlation-ID"].Should().ContainSingle()
                .Which.Should().Be(correlationId);
        }

        /// <summary>
        /// Tests that the middleware uses the trace identifier as the correlation ID if it's not in the headers.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task Invoke_ShouldUseTraceIdentifierIfCorrelationIdNotInHeaders()
        {
            // Arrange
            var context = new DefaultHttpContext();
            var expectedCorrelationId = context.TraceIdentifier;

            // Act
            using (LogContext.PushProperty("CorrelationId", expectedCorrelationId))
            {
                await this.middleware!.Invoke(context);
            }

            // Assert
            this.nextMiddlewareMock!.Verify(m => m.Invoke(context), Times.Once);
            context.TraceIdentifier.Should().Be(expectedCorrelationId);
        }
    }
}
