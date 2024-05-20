// <copyright file="DetailsTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities.Tests
{
    using Domain;
    using global::Application.Activities;
    using Microsoft.EntityFrameworkCore;
    using Persistence;

    /// <summary>
    /// Unit tests for the <see cref="Details"/> class.
    /// </summary>
    [TestClass]
    public class DetailsTests
    {
        private DataContext? context;
        private Details.Handler? handler;

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
            this.handler = new Details.Handler(this.context);

            // Seed the in-memory database with test data
            this.context.Activities.AddRange(
                new Activity { Id = Guid.NewGuid(), Title = "Activity 1" },
                new Activity { Id = Guid.NewGuid(), Title = "Activity 2" });
            this.context.SaveChanges();
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
        /// Tests that Handle returns the correct activity.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task Handle_ShouldReturnCorrectActivity()
        {
            // Arrange
            var activity = new Activity { Id = Guid.NewGuid(), Title = "Activity 3" };
            this.context!.Activities.Add(activity);
            await this.context.SaveChangesAsync();

            var query = new Details.Query { Id = activity.Id };

            // Act
            var result = await this.handler!.Handle(query, CancellationToken.None);

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(activity.Id, result.Id);
            Assert.AreEqual(activity.Title, result.Title);
        }

        /// <summary>
        /// Tests that Handle returns null when the activity does not exist.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task Handle_ShouldReturnNullWhenActivityDoesNotExist()
        {
            // Arrange
            var query = new Details.Query { Id = Guid.NewGuid() };

            // Act
            var result = await this.handler!.Handle(query, CancellationToken.None);

            // Assert
            Assert.IsNull(result);
        }
    }
}