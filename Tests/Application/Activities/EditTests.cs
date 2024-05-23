// <copyright file="EditTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using Domain;
    using Microsoft.EntityFrameworkCore;
    using Persistence;
    using static Application.Activities.Edit;

    /// <summary>
    /// Unit tests for the <see cref="Edit"/> class.
    /// </summary>
    [TestClass]
    public class EditTests
    {
        private DataContext? context;
        private Handler? handler;

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
            this.handler = new Handler(this.context);

            // Seed the in-memory database with test data
            this.context.Activities.Add(new Activity
            {
                Id = Guid.NewGuid(),
                Title = "Existing Activity",
                Date = DateTime.UtcNow,
                Description = "Description",
                Category = "Category",
                City = "City",
                Venue = "Venue",
            });
            this.context.SaveChanges();
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

        /// <summary>
        /// Tests that the Handle method updates an existing activity in the database.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task Handle_ShouldUpdateExistingActivity()
        {
            // Arrange
            var existingActivity = await this.context!.Activities.FirstAsync();
            var updatedActivity = new Activity
            {
                Id = existingActivity.Id,
                Title = "Updated Activity",
                Date = existingActivity.Date,
                Description = existingActivity.Description,
                Category = existingActivity.Category,
                City = existingActivity.City,
                Venue = existingActivity.Venue,
            };
            var command = new Command { Activity = updatedActivity };

            // Act
            await this.handler!.Handle(command, CancellationToken.None);

            // Assert
            var activity = await this.context.Activities.FindAsync(existingActivity.Id);
            Assert.IsNotNull(activity);
            Assert.AreEqual("Updated Activity", activity.Title);
        }
    }
}
