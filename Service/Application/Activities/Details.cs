// <copyright file="Details.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using Domain;
    using FluentResults;
    using MediatR;
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

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The data context.</param>
            public Handler(DataContext context)
            {
                this.context = context;
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
                var activity = await this.context.Activities.FindAsync(request.Id);

                return Result.Ok(activity);
            }
        }
    }
}
