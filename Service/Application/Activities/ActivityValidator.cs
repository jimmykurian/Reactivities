// <copyright file="ActivityValidator.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using Domain;
    using FluentValidation;

    /// <summary>
    /// Represents the validator for the Activity class.
    /// </summary>
    public class ActivityValidator : AbstractValidator<Activity>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ActivityValidator"/> class.
        /// </summary>
        public ActivityValidator()
        {
            this.RuleFor(x => x.Title).NotEmpty().WithMessage("Title is required.");
            this.RuleFor(x => x.Description).NotEmpty().WithMessage("Description is required.");
            this.RuleFor(x => x.Date).NotEmpty().WithMessage("Date is required.");
            this.RuleFor(x => x.Category).NotEmpty().WithMessage("Category is required.");
            this.RuleFor(x => x.City).NotEmpty().WithMessage("City is required.");
            this.RuleFor(x => x.Venue).NotEmpty().WithMessage("Venue is required.");
        }
    }
}