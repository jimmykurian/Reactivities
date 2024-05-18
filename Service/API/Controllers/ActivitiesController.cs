// <copyright file="ActivitiesController.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
{
    using Application.Activities;
    using Domain;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Controller for managing activities.
    /// </summary>
    public class ActivitiesController : BaseApiController
    {
        /// <summary>
        /// Retrieves a list of activities.
        /// </summary>
        /// <returns>The list of activities.</returns>
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await this.Mediator.Send(new List.Query());
        }

        /// <summary>
        /// Retrieves an activity by its ID.
        /// </summary>
        /// <param name="id">The ID of the activity.</param>
        /// <returns>The activity.</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await Task.FromResult(this.Ok());
        }
    }
}