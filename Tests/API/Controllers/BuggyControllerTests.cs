// <copyright file="BuggyControllerTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
{
    using FluentAssertions;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using Moq;

    /// <summary>
    /// Unit tests for the <see cref="BuggyController"/> class.
    /// </summary>
    [TestClass]
    public class BuggyControllerTests
    {
        private Mock<ILogger<BuggyController>>? loggerMock;
        private BuggyController? controller;

        /// <summary>
        /// Initializes the test environment before each test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            this.loggerMock = new Mock<ILogger<BuggyController>>();
            this.controller = new BuggyController(this.loggerMock.Object);
        }

        /// <summary>
        /// Tests that GetNotFound returns a NotFoundResult.
        /// </summary>
        [TestMethod]
        public void GetNotFound_ShouldReturnNotFoundResult()
        {
            // Act
            var result = this.controller!.GetNotFound();

            // Assert
            result.Should().BeOfType<NotFoundResult>();
            this.loggerMock!.Verify(
                logger => logger.Log(
                LogLevel.Warning,
                It.IsAny<EventId>(),
                It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("NotFound endpoint was hit.")),
                null,
                It.IsAny<Func<It.IsAnyType, Exception?, string>>()),
                Times.Once);
        }

        /// <summary>
        /// Tests that GetBadRequest returns a BadRequestObjectResult with the expected message.
        /// </summary>
        [TestMethod]
        public void GetBadRequest_ShouldReturnBadRequestObjectResult()
        {
            // Act
            var result = this.controller!.GetBadRequest();

            // Assert
            result.Should().BeOfType<BadRequestObjectResult>();
            var badRequestResult = result as BadRequestObjectResult;
            badRequestResult?.Value.Should().Be("This is a bad request");
            this.loggerMock!.Verify(
                logger => logger.Log(
                LogLevel.Warning,
                It.IsAny<EventId>(),
                It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("BadRequest endpoint was hit with a custom message.")),
                null,
                It.IsAny<Func<It.IsAnyType, Exception?, string>>()),
                Times.Once);
        }

        /// <summary>
        /// Tests that GetServerError throws an Exception and logs the error.
        /// </summary>
        [TestMethod]
        public void GetServerError_ShouldThrowException()
        {
            // Arrange
            var exceptionMessage = "This is a server error";
            var exception = new Exception(exceptionMessage);

            this.loggerMock!
                .Setup(x => x.Log(
                    LogLevel.Error,
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => v.ToString() == exceptionMessage),
                    It.IsAny<Exception>(),
                    (Func<It.IsAnyType, Exception?, string>)It.IsAny<object>()));

            // Act
            Action action = () => this.controller!.GetServerError();

            // Assert
            action.Should().Throw<Exception>().WithMessage(exceptionMessage);
            this.loggerMock.Verify(
                logger => logger.Log(
                    LogLevel.Error,
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("This is a server error")),
                    It.IsAny<Exception>(),
                    (Func<It.IsAnyType, Exception?, string>)It.IsAny<object>()),
                Times.Once);
        }

        /// <summary>
        /// Tests that GetUnauthorised returns an UnauthorizedResult.
        /// </summary>
        [TestMethod]
        public void GetUnauthorised_ShouldReturnUnauthorizedResult()
        {
            // Act
            var result = this.controller!.GetUnauthorised();

            // Assert
            result.Should().BeOfType<UnauthorizedResult>();
            this.loggerMock!.Verify(
                logger => logger.Log(
                LogLevel.Warning,
                It.IsAny<EventId>(),
                It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("Unauthorised endpoint was hit.")),
                null,
                It.IsAny<Func<It.IsAnyType, Exception?, string>>()),
                Times.Once);
        }
    }
}
