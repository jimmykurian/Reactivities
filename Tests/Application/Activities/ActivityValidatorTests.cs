// <copyright file="ActivityValidatorTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using System;
    using Bogus;
    using Domain;
    using FluentAssertions;
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    /// <summary>
    /// Contains unit tests for the <see cref="ActivityValidator"/> class.
    /// </summary>
    [TestClass]
    public class ActivityValidatorTests
    {
        private readonly Faker<Activity> activityFaker;

        /// <summary>
        /// Initializes a new instance of the <see cref="ActivityValidatorTests"/> class.
        /// </summary>
        public ActivityValidatorTests()
        {
            this.activityFaker = new Faker<Activity>()
                .RuleFor(a => a.Title, f => f.Lorem.Sentence())
                .RuleFor(a => a.Description, f => f.Lorem.Paragraph())
                .RuleFor(a => a.Date, f => f.Date.Future())
                .RuleFor(a => a.Category, f => f.Commerce.Categories(1)[0])
                .RuleFor(a => a.City, f => f.Address.City())
                .RuleFor(a => a.Venue, f => f.Address.StreetName());
        }

        /// <summary>
        /// Validates that the <see cref="ActivityValidator"/> detects an empty Title.
        /// </summary>
        [TestMethod]
        public void ActivityValidator_Should_Have_Error_When_Title_Is_Empty()
        {
            // Arrange
            var activity = this.activityFaker.Clone().RuleFor(a => a.Title, string.Empty).Generate();
            var validator = new ActivityValidator();

            // Act
            var result = validator.Validate(activity);

            // Assert
            result.Errors.Should().ContainSingle(e => e.PropertyName == "Title" && e.ErrorMessage == "Title is required.");
        }

        /// <summary>
        /// Validates that the <see cref="ActivityValidator"/> detects an empty Description.
        /// </summary>
        [TestMethod]
        public void ActivityValidator_Should_Have_Error_When_Description_Is_Empty()
        {
            // Arrange
            var activity = this.activityFaker.Clone().RuleFor(a => a.Description, string.Empty).Generate();
            var validator = new ActivityValidator();

            // Act
            var result = validator.Validate(activity);

            // Assert
            result.Errors.Should().ContainSingle(e => e.PropertyName == "Description" && e.ErrorMessage == "Description is required.");
        }

        /// <summary>
        /// Validates that the <see cref="ActivityValidator"/> detects an empty Date.
        /// </summary>
        [TestMethod]
        public void ActivityValidator_Should_Have_Error_When_Date_Is_Empty()
        {
            // Arrange
            var activity = this.activityFaker.Clone().RuleFor(a => a.Date, DateTime.MinValue).Generate();
            var validator = new ActivityValidator();

            // Act
            var result = validator.Validate(activity);

            // Assert
            result.Errors.Should().ContainSingle(e => e.PropertyName == "Date" && e.ErrorMessage == "Date is required.");
        }

        /// <summary>
        /// Validates that the <see cref="ActivityValidator"/> detects an empty Category.
        /// </summary>
        [TestMethod]
        public void ActivityValidator_Should_Have_Error_When_Category_Is_Empty()
        {
            // Arrange
            var activity = this.activityFaker.Clone().RuleFor(a => a.Category, string.Empty).Generate();
            var validator = new ActivityValidator();

            // Act
            var result = validator.Validate(activity);

            // Assert
            result.Errors.Should().ContainSingle(e => e.PropertyName == "Category" && e.ErrorMessage == "Category is required.");
        }

        /// <summary>
        /// Validates that the <see cref="ActivityValidator"/> detects an empty City.
        /// </summary>
        [TestMethod]
        public void ActivityValidator_Should_Have_Error_When_City_Is_Empty()
        {
            // Arrange
            var activity = this.activityFaker.Clone().RuleFor(a => a.City, string.Empty).Generate();
            var validator = new ActivityValidator();

            // Act
            var result = validator.Validate(activity);

            // Assert
            result.Errors.Should().ContainSingle(e => e.PropertyName == "City" && e.ErrorMessage == "City is required.");
        }

        /// <summary>
        /// Validates that the <see cref="ActivityValidator"/> detects an empty Venue.
        /// </summary>
        [TestMethod]
        public void ActivityValidator_Should_Have_Error_When_Venue_Is_Empty()
        {
            // Arrange
            var activity = this.activityFaker.Clone().RuleFor(a => a.Venue, string.Empty).Generate();
            var validator = new ActivityValidator();

            // Act
            var result = validator.Validate(activity);

            // Assert
            result.Errors.Should().ContainSingle(e => e.PropertyName == "Venue" && e.ErrorMessage == "Venue is required.");
        }

        /// <summary>
        /// Validates that the <see cref="ActivityValidator"/> does not detect any errors for a valid activity.
        /// </summary>
        [TestMethod]
        public void ActivityValidator_Should_Not_Have_Errors_When_Activity_Is_Valid()
        {
            // Arrange
            var activity = this.activityFaker.Generate();
            var validator = new ActivityValidator();

            // Act
            var result = validator.Validate(activity);

            // Assert
            result.IsValid.Should().BeTrue();
        }
    }
}
