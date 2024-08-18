// <copyright file="AppExceptionTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Core
{
    using Bogus;
    using FluentAssertions;
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    /// <summary>
    /// Unit tests for the <see cref="AppException"/> class.
    /// </summary>
    [TestClass]
    public class AppExceptionTests
    {
        private Faker? faker;

        /// <summary>
        /// Initializes the test environment before each test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            this.faker = new Faker();
        }

        /// <summary>
        /// Tests that the constructor correctly assigns properties.
        /// </summary>
        [TestMethod]
        public void Constructor_ShouldAssignProperties()
        {
            // Arrange
            var statusCode = this.faker!.Random.Int(400, 599);
            var message = this.faker.Lorem.Sentence();
            var details = this.faker.Lorem.Paragraph();

            // Act
            var exception = new AppException(statusCode, message, details);

            // Assert
            exception.StatusCode.Should().Be(statusCode);
            exception.Message.Should().Be(message);
            exception.Details.Should().Be(details);
        }

        /// <summary>
        /// Tests that the constructor correctly assigns properties when details are not provided.
        /// </summary>
        [TestMethod]
        public void Constructor_ShouldAssignProperties_WhenDetailsAreNotProvided()
        {
            // Arrange
            var statusCode = this.faker!.Random.Int(400, 599);
            var message = this.faker.Lorem.Sentence();

            // Act
            var exception = new AppException(statusCode, message);

            // Assert
            exception.StatusCode.Should().Be(statusCode);
            exception.Message.Should().Be(message);
            exception.Details.Should().BeNull();
        }

        /// <summary>
        /// Tests that the StatusCode property can be set and retrieved.
        /// </summary>
        [TestMethod]
        public void StatusCode_ShouldBeSettableAndRetrievable()
        {
            // Arrange
            var statusCode = this.faker!.Random.Int(400, 599);
            var exception = new AppException(400, "Test message");

            // Act
            exception.StatusCode = statusCode;

            // Assert
            exception.StatusCode.Should().Be(statusCode);
        }

        /// <summary>
        /// Tests that the Message property can be set and retrieved.
        /// </summary>
        [TestMethod]
        public void Message_ShouldBeSettableAndRetrievable()
        {
            // Arrange
            var message = this.faker!.Lorem.Sentence();
            var exception = new AppException(400, "Test message");

            // Act
            exception.Message = message;

            // Assert
            exception.Message.Should().Be(message);
        }

        /// <summary>
        /// Tests that the Details property can be set and retrieved.
        /// </summary>
        [TestMethod]
        public void Details_ShouldBeSettableAndRetrievable()
        {
            // Arrange
            var details = this.faker!.Lorem.Paragraph();
            var exception = new AppException(400, "Test message");

            // Act
            exception.Details = details;

            // Assert
            exception.Details.Should().Be(details);
        }
    }
}