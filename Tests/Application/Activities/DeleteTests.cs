// <copyright file="DeleteTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using Bogus;
    using Domain;
    using FluentAssertions;
    using Microsoft.EntityFrameworkCore;
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
            await this.context!.SaveChangesAsync();

            var command = new Command { Id = activity.Id };

            // Act
            await this.handler!.Handle(command, CancellationToken.None);

            // Assert
            var deletedActivity = await this.context.Activities.FindAsync(activity.Id);
            deletedActivity.Should().BeNull();
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
