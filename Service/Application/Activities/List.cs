// <copyright file="List.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using Domain;
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
        public class Query : IRequest<List<Activity>>
        {
        }

        /// <summary>
        /// Handles the query to list activities.
        /// </summary>
        public class Handler : IRequestHandler<Query, List<Activity>>
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
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A task that represents the asynchronous operation. The task result contains the list of activities.</returns>
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await this.context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}