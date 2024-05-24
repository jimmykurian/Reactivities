// <copyright file="EditTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using AutoMapper;
    using Bogus;
    using Domain;
    using FluentAssertions;
    using Microsoft.EntityFrameworkCore;
    using Moq;
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
        private Mock<IMapper>? mapperMock;
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
            this.mapperMock = new Mock<IMapper>();
            this.handler = new Handler(this.context, this.mapperMock.Object);

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
            var existingActivity = this.faker.Generate();
            this.context.Activities.Add(existingActivity);
            this.context.SaveChanges();
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
            var updatedActivity = this.faker!.Clone().Generate();
            updatedActivity.Id = existingActivity.Id;
            var command = new Command { Activity = updatedActivity };

            this.mapperMock!
                .Setup(m => m.Map(It.IsAny<Activity>(), It.IsAny<Activity>()))
                .Callback((Activity src, Activity dest) =>
                {
                    dest.Title = src.Title;
                    dest.Date = src.Date;
                    dest.Description = src.Description;
                    dest.Category = src.Category;
                    dest.City = src.City;
                    dest.Venue = src.Venue;
                });

            // Act
            await this.handler!.Handle(command, CancellationToken.None);

            // Assert
            var activity = await this.context.Activities.FindAsync(existingActivity.Id);
            activity.Should().NotBeNull();
            activity.Should().BeEquivalentTo(updatedActivity, options => options
                .Excluding(a => a.Id));
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
