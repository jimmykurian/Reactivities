// <copyright file="Delete.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using FluentResults;
    using MediatR;
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

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The data context.</param>
            public Handler(DataContext context)
            {
                this.context = context;
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
                var activity = await this.context.Activities.FindAsync(request.Id);

                if (activity == null)
                {
                    return null;
                }

                this.context.Remove(activity);
                var result = await this.context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                {
                    return Result.Fail<Unit>("Failed to delete the activity.");
                }

                return Result.Ok(Unit.Value);
            }
        }
    }
}
