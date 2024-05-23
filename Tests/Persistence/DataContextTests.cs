// <copyright file="DataContextTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Persistence
{
    using Domain;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Unit tests for the <see cref="DataContext"/> class.
    /// </summary>
    [TestClass]
    public class DataContextTests
    {
        private DbContextOptions<DataContext>? options;
        private DataContext? context;

        /// <summary>
        /// Initializes the test environment before each test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            this.options = new DbContextOptionsBuilder<DataContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;

            this.context = new DataContext(this.options);
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
        /// Tests that Activities DbSet can add and retrieve an activity.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task ActivitiesDbSet_ShouldAddAndRetrieveActivity()
        {
            // Arrange
            var activity = new Activity
            {
                Id = Guid.NewGuid(),
                Title = "Test Activity",
                Date = DateTime.UtcNow,
                Description = "This is a test activity.",
                Category = "Test Category",
                City = "Test City",
                Venue = "Test Venue",
            };

            // Act
            this.context!.Activities.Add(activity);
            await this.context.SaveChangesAsync();

            var retrievedActivity = await this.context.Activities.FindAsync(activity.Id);

            // Assert
            Assert.IsNotNull(retrievedActivity);
            Assert.AreEqual(activity.Id, retrievedActivity!.Id);
            Assert.AreEqual(activity.Title, retrievedActivity.Title);
            Assert.AreEqual(activity.Date, retrievedActivity.Date);
            Assert.AreEqual(activity.Description, retrievedActivity.Description);
            Assert.AreEqual(activity.Category, retrievedActivity.Category);
            Assert.AreEqual(activity.City, retrievedActivity.City);
            Assert.AreEqual(activity.Venue, retrievedActivity.Venue);
        }
    }
}
