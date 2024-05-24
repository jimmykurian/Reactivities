// <copyright file="ActivitiesControllerTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
{
    using Application.Activities;
    using Bogus;
    using Domain;
    using FluentAssertions;
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
        private Faker<Activity>? faker;

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

            // Initialize the Faker instance for Activity
            this.faker = new Faker<Activity>()
                .RuleFor(a => a.Id, f => f.Random.Guid())
                .RuleFor(a => a.Title, f => f.Lorem.Sentence())
                .RuleFor(a => a.Date, f => f.Date.Future())
                .RuleFor(a => a.Description, f => f.Lorem.Paragraph())
                .RuleFor(a => a.Category, f => f.Commerce.Categories(1)[0])
                .RuleFor(a => a.City, f => f.Address.City())
                .RuleFor(a => a.Venue, f => f.Address.StreetAddress());
        }

        /// <summary>
        /// Tests that GetActivities returns a list of activities.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task GetActivities_ShouldReturnListOfActivities()
        {
            // Arrange
            var activities = this.faker!.Generate(2);
            this.mediatorMock!
                .Setup(m => m.Send(It.IsAny<List.Query>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(activities);

            // Act
            var result = await this.controller!.GetActivities();

            // Assert
            result.Should().NotBeNull();
            result.Value.Should().BeEquivalentTo(activities);
        }

        /// <summary>
        /// Tests that GetActivity returns the correct activity.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task GetActivity_ShouldReturnActivity()
        {
            // Arrange
            var activity = this.faker!.Generate();
            this.mediatorMock!
                .Setup(m => m.Send(It.IsAny<Details.Query>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(activity);

            // Act
            var result = await this.controller!.GetActivity(activity.Id);

            // Assert
            result.Should().NotBeNull();
            result.Value.Should().BeEquivalentTo(activity);
        }

        /// <summary>
        /// Tests that CreateActivity returns Ok.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task CreateActivity_ShouldReturnOk()
        {
            // Arrange
            var activity = this.faker!.Generate();
            this.mediatorMock!
                .Setup(m => m.Send(It.IsAny<Create.Command>(), It.IsAny<CancellationToken>()))
                .Returns(Task.FromResult(Unit.Value));

            // Act
            var result = await this.controller!.CreateActivity(activity);

            // Assert
            result.Should().NotBeNull();
            result.Should().BeOfType<OkResult>();
        }

        /// <summary>
        /// Tests that EditActivity returns Ok.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task EditActivity_ShouldReturnOk()
        {
            // Arrange
            var activity = this.faker!.Generate();
            this.mediatorMock!
                .Setup(m => m.Send(It.IsAny<Edit.Command>(), It.IsAny<CancellationToken>()))
                .Returns(Task.FromResult(Unit.Value));

            // Act
            var result = await this.controller!.EditActivity(activity.Id, activity);

            // Assert
            result.Should().NotBeNull();
            result.Should().BeOfType<OkResult>();
        }
    }
}