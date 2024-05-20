// <copyright file="Details.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using System;
    using System.Threading;
    using System.Threading.Tasks;
    using Domain;
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
        public class Query : IRequest<Activity>
        {
            /// <summary>
            /// Gets or sets the ID of the activity.
            /// </summary>
            public Guid Id { get; set; }
        }

        /// <summary>
        /// Handles the query to get the details of an activity.
        /// </summary>
        public class Handler : IRequestHandler<Query, Activity>
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
            /// <param name="request">The query request.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A task that represents the asynchronous operation. The task result contains the activity details.</returns>
            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await this.context.Activities.FindAsync(request.Id);
            }
        }
    }
}
