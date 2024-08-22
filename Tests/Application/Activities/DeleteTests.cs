// <copyright file="DeleteTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using Bogus;
    using Domain;
    using FluentAssertions;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Logging;
    using Moq;
    using Persistence;
    using static Application.Activities.Delete;

    /// <summary>
    /// Unit tests for the <see cref="Delete"/> class.
    /// </summary>
    [TestClass]
    public class DeleteTests
    {
        private DataContext? context;
        private Handler? handler;
        private Faker<Activity>? faker;
        private Mock<ILogger<Handler>>? loggerMock;

        /// <summary>
        /// Initializes the test environment before each test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            var options = new DbContextOptionsBuilder<DataContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;

            this.context = new DataContext(options);
            this.loggerMock = new Mock<ILogger<Handler>>();
            this.handler = new Handler(this.context, this.loggerMock.Object);

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
        /// Tests that the Handle method deletes an existing activity from the database.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task Handle_ShouldDeleteExistingActivity()
        {
            // Arrange
            var activity = this.faker!.Generate();
            this.context!.Activities.Add(activity);
            await this.context.SaveChangesAsync();

            var command = new Command { Id = activity.Id };

            // Act
            var result = await this.handler!.Handle(command, CancellationToken.None);

            // Assert
            result.IsSuccess.Should().BeTrue();
            var deletedActivity = await this.context.Activities.FindAsync(activity.Id);
            deletedActivity.Should().BeNull();

            this.loggerMock!.Verify(
                logger => logger.Log(
                    LogLevel.Information,
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("Attempting to delete activity with ID")),
                    null,
                    It.IsAny<Func<It.IsAnyType, Exception?, string>>()),
                Times.Once);

            this.loggerMock!.Verify(
                logger => logger.Log(
                    LogLevel.Information,
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("Successfully deleted activity with ID")),
                    null,
                    It.IsAny<Func<It.IsAnyType, Exception?, string>>()),
                Times.Once);
        }

        /// <summary>
        /// Tests that the Handle method returns null if the activity is not found.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task Handle_ShouldReturnNullIfActivityNotFound()
        {
            // Arrange
            var command = new Command { Id = Guid.NewGuid() };

            // Act
            var result = await this.handler!.Handle(command, CancellationToken.None);

            // Assert
            result.Should().BeNull();

            this.loggerMock!.Verify(
                logger => logger.Log(
                    LogLevel.Warning,
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("Activity with ID")),
                    null,
                    It.IsAny<Func<It.IsAnyType, Exception?, string>>()),
                Times.Once);
        }

        /// <summary>
        /// Cleans up the test environment after each test.
        /// </summary>
        [TestCleanup]
        public void TestCleanup()
        {
            this.context!.Database.EnsureDeleted();
            this.context.Dispose();
        }
    }
}
