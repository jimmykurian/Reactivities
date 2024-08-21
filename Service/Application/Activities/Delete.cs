// <copyright file="Delete.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using FluentResults;
    using MediatR;
    using Microsoft.Extensions.Logging;
    using Persistence;

    /// <summary>
    /// Represents a request to delete an activity.
    /// </summary>
    public class Delete
    {
        /// <summary>
        /// Represents the command to delete an activity.
        /// </summary>
        public class Command : IRequest<Result<Unit>>
        {
            /// <summary>
            /// Gets or sets the ID of the activity to be deleted.
            /// </summary>
            public Guid Id { get; set; }
        }

        /// <summary>
        /// Handles the command to delete an activity.
        /// </summary>
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext context;
            private readonly ILogger<Handler> logger;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The data context.</param>
            /// <param name="logger">The logger instance.</param>
            public Handler(DataContext context, ILogger<Handler> logger)
            {
                this.context = context;
                this.logger = logger;
            }

            /// <summary>
            /// Handles the request to delete an activity.
            /// </summary>
            /// <param name="request">The command containing the ID of the activity to be deleted.</param>
            /// <param name="cancellationToken">A token to monitor for cancellation requests.</param>
            /// <returns>
            /// A <see cref="Task"/> representing the asynchronous operation, containing the result of the delete operation.
            /// </returns>
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                this.logger.LogInformation("Attempting to delete activity with ID: {ActivityId}", request.Id);

                var activity = await this.context.Activities.FindAsync(request.Id);

                if (activity == null)
                {
                    this.logger.LogWarning("Activity with ID: {ActivityId} was not found.", request.Id);
                    return null;
                }

                this.context.Remove(activity);
                var result = await this.context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                {
                    this.logger.LogError("Failed to delete activity with ID: {ActivityId}", request.Id);
                    return Result.Fail<Unit>("Failed to delete the activity.");
                }

                this.logger.LogInformation("Successfully deleted activity with ID: {ActivityId}", request.Id);
                return Result.Ok(Unit.Value);
            }
        }
    }
}
