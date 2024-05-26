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
            return await this.Mediator.Send(new Details.Query { Id = id });
        }

        /// <summary>
        /// Creates a new activity.
        /// </summary>
        /// <param name="activity">The activity to be created.</param>
        /// <returns>An <see cref="ActionResult"/> representing the result of the action.</returns>
        [HttpPost]
        public async Task<ActionResult> CreateActivity(Activity activity)
        {
            await this.Mediator.Send(new Create.Command { Activity = activity });

            return this.Ok();
        }

        /// <summary>
        /// Edits an existing activity.
        /// </summary>
        /// <param name="id">The ID of the activity to be edited.</param>
        /// <param name="activity">The updated activity details.</param>
        /// <returns>An <see cref="IActionResult"/> representing the result of the action.</returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            // TODO: Add Null check and exception handling for activity object.
            activity.Id = id;
            await this.Mediator.Send(new Edit.Command { Activity = activity });

            return this.Ok();
        }

        /// <summary>
        /// Deletes an existing activity.
        /// </summary>
        /// <param name="id">The ID of the activity to be deleted.</param>
        /// <returns>An <see cref="IActionResult"/> representing the result of the action.</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            await this.Mediator.Send(new Delete.Command { Id = id });

            return this.Ok();
        }
    }
}