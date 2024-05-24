// <copyright file="DataContextTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Persistence
{
    using Bogus;
    using Domain;
    using FluentAssertions;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Unit tests for the <see cref="DataContext"/> class.
    /// </summary>
    [TestClass]
    public class DataContextTests
    {
        private DbContextOptions<DataContext>? options;
        private DataContext? context;
        private Faker<Activity>? faker;

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
        /// Tests that Activities DbSet can add and retrieve an activity.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task ActivitiesDbSet_ShouldAddAndRetrieveActivity()
        {
            // Arrange
            var activity = this.faker!.Generate();

            // Act
            this.context!.Activities.Add(activity);
            await this.context.SaveChangesAsync();

            var retrievedActivity = await this.context.Activities.FindAsync(activity.Id);

            // Assert
            retrievedActivity.Should().NotBeNull();
            retrievedActivity.Should().BeEquivalentTo(activity, options => options.Excluding(a => a.Id));
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