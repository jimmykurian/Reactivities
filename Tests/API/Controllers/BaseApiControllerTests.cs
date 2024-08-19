// <copyright file="BaseApiControllerTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
{
    using FluentAssertions;
    using MediatR;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using Moq;

    /// <summary>
    /// Unit tests for the <see cref="BaseApiController"/> class.
    /// </summary>
    [TestClass]
    public class BaseApiControllerTests
    {
        private Mock<IServiceProvider>? serviceProviderMock;
        private Mock<IMediator>? mediatorMock;
        private Mock<ILogger<BaseApiController>>? loggerMock;
        private DefaultHttpContext? httpContext;
        private BaseApiController? controller;

        /// <summary>
        /// Initializes the test environment before each test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            this.serviceProviderMock = new Mock<IServiceProvider>();
            this.mediatorMock = new Mock<IMediator>();
            this.loggerMock = new Mock<ILogger<BaseApiController>>();

            // Setup the service provider to return the mocked IMediator instance
            this.serviceProviderMock.Setup(sp => sp.GetService(typeof(IMediator)))
                                    .Returns(this.mediatorMock.Object);

            // Create a default HttpContext and set the RequestServices to the mocked service provider
            this.httpContext = new DefaultHttpContext
            {
                RequestServices = this.serviceProviderMock.Object,
            };

            // Create a concrete implementation of BaseApiController to test
            this.controller = new TestableBaseApiController(this.loggerMock.Object)
            {
                ControllerContext = new ControllerContext
                {
                    HttpContext = this.httpContext,
                },
            };
        }

        /// <summary>
        /// Tests that the Mediator property returns the mocked IMediator instance.
        /// </summary>
        [TestMethod]
        public void Mediator_ShouldReturnMockedMediatorInstance()
        {
            // Act
            var mediator = this.controller!.Mediator;

            // Assert
            mediator.Should().NotBeNull();
            mediator.Should().BeSameAs(this.mediatorMock!.Object);
        }

        /// <summary>
        /// Tests that the logger is properly injected and can be used.
        /// </summary>
        [TestMethod]
        public void Logger_ShouldBeInjected()
        {
            // Act
            this.controller!.HandleResult<string>(FluentResults.Result.Ok("Test"));

            // Assert
            this.loggerMock!.Verify(
                x => x.Log(
                    It.IsAny<LogLevel>(),
                    It.IsAny<EventId>(),
                    It.IsAny<It.IsAnyType>(),
                    It.IsAny<Exception>(),
                    (Func<It.IsAnyType, Exception?, string>)It.IsAny<object>()),
                Times.AtLeastOnce);
        }

        /// <summary>
        /// Concrete implementation of BaseApiController for testing purposes.
        /// </summary>
        private class TestableBaseApiController : BaseApiController
        {
            public TestableBaseApiController(ILogger<BaseApiController> logger)
                : base(logger)
            {
            }
        }
    }
}
