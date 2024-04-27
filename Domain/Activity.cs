// <copyright file="Activity.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Domain
{
    /// <summary>
    /// Represents an activity with a title, date, and other details.
    /// </summary>
    public class Activity
    {
        /// <summary>
        /// Gets or sets the identifier for the Activity.
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or sets the title of the Activity.
        /// </summary>
        public string? Title { get; set; }

        /// <summary>
        /// Gets or sets the date of the Activity.
        /// </summary>
        public DateTime Date { get; set; }

        /// <summary>
        /// Gets or sets the description of the Activity.
        /// </summary>
        public string? Description { get; set; }

        /// <summary>
        /// Gets or sets the category of the Activity.
        /// </summary>
        public string? Category { get; set; }

        /// <summary>
        /// Gets or sets the city where the Activity takes place.
        /// </summary>
        public string? City { get; set; }

        /// <summary>
        /// Gets or sets the venue of the Activity.
        /// </summary>
        public string? Venue { get; set; }
    }
}
