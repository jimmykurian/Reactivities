// <copyright file="ActivitiesController.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
{
    using Domain;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Persistence;

    /// <summary>
    /// Controller for managing activities.
    /// </summary>
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext context;

        /// <summary>
        /// Initializes a new instance of the <see cref="ActivitiesController"/> class.
        /// </summary>
        /// <param name="context">The data context.</param>
        public ActivitiesController(DataContext context)
        {
            this.context = context;
        }

        /// <summary>
        /// Retrieves a list of activities.
        /// </summary>
        /// <returns>The list of activities.</returns>
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await this.context.Activities.ToListAsync();
        }

        /// <summary>
        /// Retrieves an activity by its ID.
        /// </summary>
        /// <param name="id">The ID of the activity.</param>
        /// <returns>The activity.</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await this.context.Activities.FindAsync(id);
        }
    }
}