// <copyright file="ActivitiesControllerTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
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
        /// Tests that GetActivity returns the correct activity.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task GetActivity_ShouldReturnActivity()
        {
            // Arrange
            var activityId = Guid.NewGuid();
            var activity = new Activity { Id = activityId, Title = "Activity" };
            this.mediatorMock!
                .Setup(m => m.Send(It.IsAny<Details.Query>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(activity);

            // Act
            var result = await this.controller!.GetActivity(activityId);

            // Assert
            Assert.IsNotNull(result);
            Assert.IsNotNull(result.Value);
            Assert.AreEqual(activity, result.Value);
        }

        /// <summary>
        /// Tests that CreateActivity returns Ok.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task CreateActivity_ShouldReturnOk()
        {
            // Arrange
            var activity = new Activity { Id = Guid.NewGuid(), Title = "New Activity" };
            this.mediatorMock!
                .Setup(m => m.Send(It.IsAny<Create.Command>(), It.IsAny<CancellationToken>()))
                .Returns(Task.FromResult(Unit.Value));

            // Act
            var result = await this.controller!.CreateActivity(activity);

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(OkResult));
        }

        /// <summary>
        /// Tests that EditActivity returns Ok.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task EditActivity_ShouldReturnOk()
        {
            // Arrange
            var activity = new Activity { Id = Guid.NewGuid(), Title = "Updated Activity" };
            this.mediatorMock!
                .Setup(m => m.Send(It.IsAny<Edit.Command>(), It.IsAny<CancellationToken>()))
                .Returns(Task.FromResult(Unit.Value));

            // Act
            var result = await this.controller!.EditActivity(activity.Id, activity);

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(OkResult));
        }
    }
}