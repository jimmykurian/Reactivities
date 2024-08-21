// <copyright file="ActivitiesController.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
{
    using Application.Activities;
    using Domain;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    /// <summary>
    /// Controller for managing activities.
    /// </summary>
    public class ActivitiesController(ILogger<ActivitiesController> logger) : BaseApiController(logger)
    {
        private readonly ILogger<ActivitiesController> logger = logger;

        /// <summary>
        /// Retrieves a list of activities.
        /// </summary>
        /// <returns>
        /// An <see cref="IActionResult"/> containing the list of activities.
        /// </returns>
        /// <response code="200">Returns the list of activities.</response>
        /// <response code="400">If the request is invalid.</response>
        /// <response code="404">If no activities are found.</response>
        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> GetActivities()
        {
            this.logger.LogInformation("Retrieving all activities at {Time}", DateTime.UtcNow);
            return this.HandleResult(await this.Mediator.Send(new List.Query()));
        }

        /// <summary>
        /// Retrieves an activity by its ID.
        /// </summary>
        /// <param name="id">The ID of the activity.</param>
        /// <returns>
        /// An <see cref="IActionResult"/> containing the activity.
        /// </returns>
        /// <response code="200">Returns the activity.</response>
        /// <response code="400">If the request is invalid.</response>
        /// <response code="404">If the activity is not found.</response>
        [HttpGet("{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> GetActivity(Guid id)
        {
            this.logger.LogInformation("Retrieving activity with ID {ActivityId} at {Time}", id, DateTime.UtcNow);
            return this.HandleResult(await this.Mediator.Send(new Details.Query { Id = id }));
        }

        /// <summary>
        /// Creates a new activity.
        /// </summary>
        /// <param name="activity">The activity to be created.</param>
        /// <returns>
        /// An <see cref="ActionResult"/> representing the result of the action.
        /// </returns>
        /// <response code="201">If the activity was created successfully.</response>
        /// <response code="400">If the request is invalid.</response>
        [HttpPost]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public async Task<ActionResult> CreateActivity(Activity activity)
        {
            this.logger.LogInformation("Creating a new activity at {Time}", DateTime.UtcNow);
            return this.HandleResult(await this.Mediator.Send(new Create.Command { Activity = activity }), true);
        }

        /// <summary>
        /// Edits an existing activity.
        /// </summary>
        /// <param name="id">The ID of the activity to be edited.</param>
        /// <param name="activity">The updated activity details.</param>
        /// <returns>
        /// An <see cref="IActionResult"/> representing the result of the action.
        /// </returns>
        /// <response code="200">If the activity was updated successfully.</response>
        /// <response code="400">If the request is invalid.</response>
        /// <response code="404">If the activity is not found.</response>
        [HttpPut("{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            activity.Id = id;
            this.logger.LogInformation("Editing activity with ID {ActivityId} at {Time}", id, DateTime.UtcNow);
            return this.HandleResult(await this.Mediator.Send(new Edit.Command { Activity = activity }));
        }

        /// <summary>
        /// Deletes an existing activity.
        /// </summary>
        /// <param name="id">The ID of the activity to be deleted.</param>
        /// <returns>
        /// An <see cref="IActionResult"/> representing the result of the action.
        /// </returns>
        /// <response code="204">If the activity was deleted successfully.</response>
        /// <response code="400">If the request is invalid.</response>
        /// <response code="404">If the activity is not found.</response>
        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            this.logger.LogInformation("Deleting activity with ID {ActivityId} at {Time}", id, DateTime.UtcNow);
            return this.HandleResult(await this.Mediator.Send(new Delete.Command { Id = id }), false, true);
        }
    }
}
