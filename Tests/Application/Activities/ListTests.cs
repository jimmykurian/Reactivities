// <copyright file="ListTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using Bogus;
    using Domain;
    using FluentAssertions;
    using Microsoft.EntityFrameworkCore;
    using Persistence;
    using static Application.Activities.List;

    /// <summary>
    /// Unit tests for the <see cref="List"/> class.
    /// </summary>
    [TestClass]
    public class ListTests
    {
        private DataContext? context;
        private Handler? handler;
        private Faker<Activity>? faker;
        private List<Activity>? seededActivities;

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

            // Seed the in-memory database with test data
            this.seededActivities = this.faker.Generate(2);
            this.context.Activities.AddRange(this.seededActivities);
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
            var result = await this.handler!.Handle(new Query(), CancellationToken.None);

            // Assert
            result.Should().NotBeNull();
            result.Should().HaveCount(this.seededActivities!.Count);
            result.Should().BeEquivalentTo(this.seededActivities, options => options
                .Excluding(activity => activity.Id)
                .ComparingByMembers<Activity>());
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