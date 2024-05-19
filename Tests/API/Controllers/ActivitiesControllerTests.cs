// <copyright file="ActivitiesControllerTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers.Tests
{
    using Application.Activities;
    using Domain;
    using MediatR;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.DependencyInjection;
    using Moq;

    /// <summary>
    /// Unit tests for the <see cref="ActivitiesController"/> class.
    /// </summary>
    [TestClass]
    public class ActivitiesControllerTests
    {
        private Mock<IMediator>? mediatorMock;
        private ActivitiesController? controller;

        /// <summary>
        /// Initializes the test environment before each test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            this.mediatorMock = new Mock<IMediator>();

            this.controller = new ActivitiesController
            {
                ControllerContext = new ControllerContext
                {
                    HttpContext = new DefaultHttpContext
                    {
                        RequestServices = new ServiceCollection()
                            .AddSingleton(this.mediatorMock.Object)
                            .BuildServiceProvider(),
                    },
                },
            };
        }

        /// <summary>
        /// Tests that GetActivities returns a list of activities.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task GetActivities_ShouldReturnListOfActivities()
        {
            // Arrange
            var activities = new List<Activity>
            {
                new Activity { Id = Guid.NewGuid(), Title = "Activity 1" },
                new Activity { Id = Guid.NewGuid(), Title = "Activity 2" },
            };
            this.mediatorMock!
                .Setup(m => m.Send(It.IsAny<List.Query>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(activities);

            // Act
            var result = await this.controller!.GetActivities();

            // Assert
            Assert.IsNotNull(result);
            Assert.IsNotNull(result.Value);
            Assert.AreEqual(activities, result.Value);
        }

        /// <summary>
        /// Tests that GetActivity returns an Ok result.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task GetActivity_ShouldReturnOk()
        {
            // Arrange
            var activityId = Guid.NewGuid();

            // Act
            var result = await this.controller!.GetActivity(activityId);

            // Assert
            var okResult = result.Result as OkResult;
            Assert.IsNotNull(okResult);
        }
    }
}