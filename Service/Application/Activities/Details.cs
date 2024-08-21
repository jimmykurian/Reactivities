// <copyright file="Details.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using Domain;
    using FluentResults;
    using MediatR;
    using Microsoft.Extensions.Logging;
    using Persistence;

    /// <summary>
    /// Represents a request to get the details of an activity.
    /// </summary>
    public class Details
    {
        /// <summary>
        /// Represents the query to get the details of an activity.
        /// </summary>
        public class Query : IRequest<Result<Activity>>
        {
            /// <summary>
            /// Gets or sets the ID of the activity.
            /// </summary>
            public Guid Id { get; set; }
        }

        /// <summary>
        /// Handles the query to get the details of an activity.
        /// </summary>
        public class Handler : IRequestHandler<Query, Result<Activity>>
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
            /// Handles the request to get the details of an activity.
            /// </summary>
            /// <param name="request">The query request containing the ID of the activity.</param>
            /// <param name="cancellationToken">A token to monitor for cancellation requests.</param>
            /// <returns>
            /// A <see cref="Task"/> representing the asynchronous operation, containing the result of the query.
            /// The result includes the activity details if found.
            /// </returns>
            public async Task<Result<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                this.logger.LogInformation("Fetching details for activity with ID: {ActivityId}", request.Id);

                var activity = await this.context.Activities.FindAsync(request.Id);

                if (activity == null)
                {
                    this.logger.LogWarning("Activity with ID: {ActivityId} was not found", request.Id);
                    return Result.Fail<Activity>("Activity not found.");
                }

                this.logger.LogInformation("Successfully fetched details for activity with ID: {ActivityId}", request.Id);
                return Result.Ok(activity);
            }
        }
    }
}
