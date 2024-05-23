// <copyright file="ActivityTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Domain
{
    /// <summary>
    /// Unit tests for the <see cref="Activity"/> class.
    /// </summary>
    [TestClass]
    public class ActivityTests
    {
        /// <summary>
        /// Tests that properties of the Activity class can be set and retrieved correctly.
        /// </summary>
        [TestMethod]
        public void Activity_Properties_ShouldSetAndGetCorrectly()
        {
            // Arrange
            var id = Guid.NewGuid();
            var title = "Test Activity";
            var date = DateTime.UtcNow;
            var description = "This is a test activity.";
            var category = "Test Category";
            var city = "Test City";
            var venue = "Test Venue";

            // Act
            var activity = new Activity
            {
                Id = id,
                Title = title,
                Date = date,
                Description = description,
                Category = category,
                City = city,
                Venue = venue,
            };

            // Assert
            Assert.AreEqual(id, activity.Id);
            Assert.AreEqual(title, activity.Title);
            Assert.AreEqual(date, activity.Date);
            Assert.AreEqual(description, activity.Description);
            Assert.AreEqual(category, activity.Category);
            Assert.AreEqual(city, activity.City);
            Assert.AreEqual(venue, activity.Venue);
        }
    }
}
