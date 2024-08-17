// <copyright file="List.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using Domain;
    using FluentResults;
    using MediatR;
    using Microsoft.EntityFrameworkCore;
    using Persistence;

    /// <summary>
    /// Represents a request to list activities.
    /// </summary>
    public class List
    {
        /// <summary>
        /// Represents the query to list activities.
        /// </summary>
        public class Query : IRequest<Result<List<Activity>>>
        {
        }

        /// <summary>
        /// Handles the query to list activities.
        /// </summary>
        public class Handler : IRequestHandler<Query, Result<List<Activity>>>
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
            /// Handles the request to list activities.
            /// </summary>
            /// <param name="request">The query request.</param>
            /// <param name="cancellationToken">A token to monitor for cancellation requests.</param>
            /// <returns>
            /// A <see cref="Task"/> representing the asynchronous operation, containing the result of the query.
            /// The result includes the list of activities.
            /// </returns>
            public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result.Ok(await this.context.Activities.ToListAsync(cancellationToken));
            }
        }
    }
}