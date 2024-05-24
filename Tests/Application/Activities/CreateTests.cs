﻿// <copyright file="CreateTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using Bogus;
    using Domain;
    using FluentAssertions;
    using Microsoft.EntityFrameworkCore;
    using Persistence;
    using static Application.Activities.Create;

    /// <summary>
    /// Unit tests for the <see cref="Create"/> class.
    /// </summary>
    [TestClass]
    public class CreateTests
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
        /// Tests that the Handle method adds a new activity to the database.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task Handle_ShouldAddNewActivity()
        {
            // Arrange
            var activity = this.faker!.Generate();
            var command = new Command { Activity = activity };

            // Act
            await this.handler!.Handle(command, CancellationToken.None);

            // Assert
            var addedActivity = await this.context!.Activities.FindAsync(activity.Id);
            addedActivity.Should().NotBeNull();
            addedActivity.Should().BeEquivalentTo(activity, options => options.Excluding(a => a.Id));
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
