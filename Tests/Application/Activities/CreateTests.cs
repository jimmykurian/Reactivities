// <copyright file="CreateTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities.Tests
{
    using Domain;
    using Microsoft.EntityFrameworkCore;
    using Persistence;

    /// <summary>
    /// Unit tests for the <see cref="Create"/> class.
    /// </summary>
    [TestClass]
    public class CreateTests
    {
        private DataContext? context;
        private Create.Handler? handler;

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
            this.handler = new Create.Handler(this.context);
        }

        /// <summary>
        /// Cleans up the test environment after each test.
        /// </summary>
        [TestCleanup]
        public void TestCleanup()
        {
            this.context?.Database.EnsureDeleted();
            this.context?.Dispose();
        }

        /// <summary>
        /// Tests that the Handle method adds a new activity to the database.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task Handle_ShouldAddNewActivity()
        {
            // Arrange
            var activity = new Activity
            {
                Id = Guid.NewGuid(),
                Title = "New Activity",
                Date = DateTime.UtcNow,
                Description = "This is a new activity.",
                Category = "Test Category",
                City = "Test City",
                Venue = "Test Venue",
            };
            var command = new Create.Command { Activity = activity };

            // Act
            await this.handler!.Handle(command, CancellationToken.None);

            // Assert
            var addedActivity = await this.context!.Activities.FindAsync(activity.Id);
            Assert.IsNotNull(addedActivity);
            Assert.AreEqual(activity.Title, addedActivity!.Title);
            Assert.AreEqual(activity.Date, addedActivity.Date);
            Assert.AreEqual(activity.Description, addedActivity.Description);
            Assert.AreEqual(activity.Category, addedActivity.Category);
            Assert.AreEqual(activity.City, addedActivity.City);
            Assert.AreEqual(activity.Venue, addedActivity.Venue);
        }
    }
}
