// <copyright file="ActivitiesControllerTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
{
    using Application.Activities;
    using Bogus;
    using Domain;
    using FluentAssertions;
    using FluentResults;
    using MediatR;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;
    using Moq;

    /// <summary>
    /// Unit tests for the <see cref="ActivitiesController"/> class.
    /// </summary>
    [TestClass]
    public class ActivitiesControllerTests
    {
        private Mock<IMediator>? mediatorMock;
        private Mock<ILogger<ActivitiesController>>? loggerMock;
        private ActivitiesController? controller;
        private Faker<Activity>? faker;

        /// <summary>
        /// Initializes the test environment before each test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            this.mediatorMock = new Mock<IMediator>();
            this.loggerMock = new Mock<ILogger<ActivitiesController>>();

            this.controller = new ActivitiesController(this.loggerMock.Object)
            {
                ControllerContext = new ControllerContext
                {
                    HttpContext = new DefaultHttpContext
                    {
                        RequestServices = new ServiceCollection()
                            .AddSingleton(this.mediatorMock.Object)
                            .AddSingleton(this.loggerMock.Object)
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
            var activities = this.faker?.Generate(2) ?? new List<Activity>();
            var result = Result.Ok<List<Activity>>(activities);
            this.mediatorMock?
                .Setup(m => m.Send(It.IsAny<List.Query>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(result);

            // Act
            var actionResult = await this.controller!.GetActivities();

            // Assert
            actionResult.Should().NotBeNull();
            var okResult = actionResult as OkObjectResult;
            okResult.Should().NotBeNull();
            okResult?.Value.Should().BeEquivalentTo(activities);
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
            var result = Result.Ok(activity);
            this.mediatorMock?
                .Setup(m => m.Send(It.IsAny<Details.Query>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(result);

            // Act
            var actionResult = await this.controller!.GetActivity(activity.Id);

            // Assert
            actionResult.Should().NotBeNull();
            var okResult = actionResult as OkObjectResult;
            okResult.Should().NotBeNull();
            okResult?.Value.Should().BeEquivalentTo(activity);
        }

        /// <summary>
        /// Tests that GetActivity returns NotFound when the activity is not found.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task GetActivity_ShouldReturnNotFound_WhenActivityIsNotFound()
        {
            // Arrange
            var result = Result.Fail<Activity>("Activity not found");
            this.mediatorMock?
                .Setup(m => m.Send(It.IsAny<Details.Query>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(result);

            // Act
            var actionResult = await this.controller!.GetActivity(Guid.NewGuid());

            // Assert
            actionResult.Should().NotBeNull();
            actionResult.Should().BeOfType<NotFoundResult>();
        }

        /// <summary>
        /// Tests that CreateActivity returns CreatedAtAction.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task CreateActivity_ShouldReturnCreatedAtAction()
        {
            // Arrange
            var activity = this.faker?.Generate();
            var result = Result.Ok(Unit.Value);
            this.mediatorMock?
                .Setup(m => m.Send(It.IsAny<Create.Command>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(result);

            // Act
            var actionResult = await this.controller!.CreateActivity(activity);

            // Assert
            actionResult.Should().NotBeNull();
            var createdResult = actionResult as CreatedResult;
            createdResult.Should().NotBeNull();
            createdResult?.Location.Should().BeEmpty();
        }

        /// <summary>
        /// Tests that EditActivity returns the expected result.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task EditActivity_ShouldReturnExpectedResult()
        {
            // Arrange
            var activity = this.faker?.Generate();
            var result = Result.Ok(Unit.Value);
            this.mediatorMock?
                .Setup(m => m.Send(It.IsAny<Edit.Command>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(result);

            // Act
            var actionResult = await this.controller!.EditActivity(activity!.Id, activity);

            // Assert
            actionResult.Should().NotBeNull();

            if (activity == null)
            {
                actionResult.Should().BeOfType<NotFoundResult>();
            }
            else
            {
                actionResult.Should().BeOfType<OkObjectResult>();
            }
        }

        /// <summary>
        /// Tests that DeleteActivity returns NoContentResult.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task DeleteActivity_ShouldReturnNoContentResult()
        {
            // Arrange
            var activityId = Guid.NewGuid();
            var result = Result.Ok(Unit.Value);
            this.mediatorMock?
                .Setup(m => m.Send(It.IsAny<Delete.Command>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(result);

            // Act
            var actionResult = await this.controller!.DeleteActivity(activityId);

            // Assert
            actionResult.Should().NotBeNull();
            var noContentResult = actionResult as NoContentResult;
            noContentResult.Should().NotBeNull();
        }

        /// <summary>
        /// Tests that DeleteActivity returns NotFound when the activity is not found.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task DeleteActivity_ShouldReturnNotFound_WhenActivityIsNotFound()
        {
            // Arrange
            var result = Result.Fail<Unit>("Activity not found");
            this.mediatorMock?
                .Setup(m => m.Send(It.IsAny<Delete.Command>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(result);

            // Act
            var actionResult = await this.controller!.DeleteActivity(Guid.NewGuid());

            // Assert
            actionResult.Should().NotBeNull();
            actionResult.Should().BeOfType<NotFoundResult>();
        }
    }
}
