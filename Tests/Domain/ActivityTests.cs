// <copyright file="ActivityTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Domain
{
    using Bogus;
    using FluentAssertions;

    /// <summary>
    /// Unit tests for the <see cref="Activity"/> class.
    /// </summary>
    [TestClass]
    public class ActivityTests
    {
        private Faker<Activity>? faker;

        /// <summary>
        /// Initializes the test environment before each test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
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
        /// Tests that properties of the Activity class can be set and retrieved correctly.
        /// </summary>
        [TestMethod]
        public void Activity_Properties_ShouldSetAndGetCorrectly()
        {
            // Arrange
            var activity = this.faker!.Generate();

            // Act & Assert
            activity.Id.Should().NotBeEmpty();
            activity.Title.Should().NotBeNullOrEmpty();
            activity.Date.Should().BeAfter(DateTime.UtcNow);
            activity.Description.Should().NotBeNullOrEmpty();
            activity.Category.Should().NotBeNullOrEmpty();
            activity.City.Should().NotBeNullOrEmpty();
            activity.Venue.Should().NotBeNullOrEmpty();
        }
    }
}
