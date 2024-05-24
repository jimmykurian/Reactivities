// <copyright file="MappingProfilesTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Core
{
    using AutoMapper;
    using Bogus;
    using Domain;
    using FluentAssertions;

    /// <summary>
    /// Unit tests for the <see cref="MappingProfiles"/> class.
    /// </summary>
    [TestClass]
    public class MappingProfilesTests
    {
        private IMapper? mapper;

        /// <summary>
        /// Initializes the test environment before each test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            var config = new MapperConfiguration(cfg => cfg.AddProfile<MappingProfiles>());
            this.mapper = config.CreateMapper();
        }

        /// <summary>
        /// Tests that the mapping configuration is valid.
        /// </summary>
        [TestMethod]
        public void MappingConfiguration_ShouldBeValid()
        {
            this.mapper!.ConfigurationProvider.AssertConfigurationIsValid();
        }

        /// <summary>
        /// Tests that the mapping between <see cref="Activity"/> objects is successful.
        /// </summary>
        [TestMethod]
        public void Should_MapActivityToActivity()
        {
            // Arrange
            var faker = new Faker<Activity>()
                .RuleFor(a => a.Id, f => f.Random.Guid())
                .RuleFor(a => a.Title, f => f.Lorem.Sentence())
                .RuleFor(a => a.Date, f => f.Date.Future())
                .RuleFor(a => a.Description, f => f.Lorem.Paragraph())
                .RuleFor(a => a.Category, f => f.Commerce.Categories(1)[0])
                .RuleFor(a => a.City, f => f.Address.City())
                .RuleFor(a => a.Venue, f => f.Address.StreetAddress());

            var activity = faker.Generate();

            // Act
            var result = this.mapper!.Map<Activity>(activity);

            // Assert
            result.Should().NotBeNull();
            result.Should().BeEquivalentTo(activity, options => options.Excluding(a => a.Id));
        }
    }
}
