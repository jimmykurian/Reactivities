// <copyright file="DataContext.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Persistence
{
    using Domain;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Represents the database context for the application, providing access to the entity sets.
    /// </summary>
    public class DataContext : DbContext
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DataContext"/> class.
        /// </summary>
        /// <param name="options">The options to be used by the DbContext.</param>
        public DataContext(DbContextOptions options)
            : base(options)
        {
        }

        /// <summary>
        /// Gets or sets the set of activities.
        /// </summary>
        public DbSet<Activity> Activities { get; set; }
    }
}
