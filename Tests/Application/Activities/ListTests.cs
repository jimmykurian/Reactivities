// <copyright file="ListTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using Domain;
    using Microsoft.EntityFrameworkCore;
    using Persistence;

    /// <summary>
    /// Unit tests for the <see cref="List.Handler"/> class.
    /// </summary>
    [TestClass]
    public class ListTests
    {
        private DataContext? context;
        private List.Handler? handler;

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
            this.handler = new List.Handler(this.context);

            // Seed the in-memory database with test data
            this.context.Activities.AddRange(
                new Activity { Id = Guid.NewGuid(), Title = "Activity 1" },
                new Activity { Id = Guid.NewGuid(), Title = "Activity 2" });
            this.context.SaveChanges();
        }

        /// <summary>
        /// Tests that Handle returns a list of activities.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task Handle_ShouldReturnListOfActivities()
        {
            // Act
            var result = await this.handler!.Handle(new List.Query(), CancellationToken.None);

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(2, result.Count);
            Assert.AreEqual("Activity 1", result[0].Title);
            Assert.AreEqual("Activity 2", result[1].Title);
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
    }
}