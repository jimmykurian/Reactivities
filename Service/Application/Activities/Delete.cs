// <copyright file="Delete.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using MediatR;

    /// <summary>
    /// Represents a request to delete an activity.
    /// </summary>
    public class Delete
    {
        /// <summary>
        /// Represents the command to delete an activity.
        /// </summary>
        public class Command : IRequest
        {
            /// <summary>
            /// Gets or sets the ID of the activity to be deleted.
            /// </summary>
            public Guid Id { get; set; }
        }

        /// <summary>
        /// Handles the command to delete an activity.
        /// </summary>
        public class Handler : IRequestHandler<Command>
        {
            private readonly Persistence.DataContext context;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The data context.</param>
            public Handler(Persistence.DataContext context)
            {
                this.context = context;
            }

            /// <summary>
            /// Handles the request to delete an activity.
            /// </summary>
            /// <param name="request">The command request.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A task that represents the asynchronous operation.</returns>
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                // TODO: Add error and exception handling for activity not found.
                var activity = await this.context.Activities.FindAsync(request.Id);

                this.context.Remove(activity);
                await this.context.SaveChangesAsync();
            }
        }
    }
}
