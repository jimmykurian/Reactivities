// <copyright file="BaseApiControllerTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers.Tests
{
    using MediatR;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Moq;

    /// <summary>
    /// Unit tests for the <see cref="BaseApiController"/> class.
    /// </summary>
    [TestClass]
    public class BaseApiControllerTests
    {
        private Mock<IServiceProvider>? serviceProviderMock;
        private Mock<IMediator>? mediatorMock;
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

            // Setup the service provider to return the mocked IMediator instance
            this.serviceProviderMock.Setup(sp => sp.GetService(typeof(IMediator)))
                                    .Returns(this.mediatorMock.Object);

            // Create a default HttpContext and set the RequestServices to the mocked service provider
            this.httpContext = new DefaultHttpContext
            {
                RequestServices = this.serviceProviderMock.Object,
            };

            // Create a concrete implementation of BaseApiController to test
            this.controller = new TestableBaseApiController
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
            Assert.IsNotNull(mediator);
            Assert.AreEqual(this.mediatorMock!.Object, mediator);
        }

        /// <summary>
        /// Concrete implementation of BaseApiController for testing purposes.
        /// </summary>
        private class TestableBaseApiController : BaseApiController
        {
        }
    }
}