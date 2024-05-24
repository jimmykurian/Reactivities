// <copyright file="MappingProfiles.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Core
{
    using AutoMapper;
    using Domain;

    /// <summary>
    /// Contains mapping profiles for AutoMapper.
    /// </summary>
    public class MappingProfiles : Profile
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MappingProfiles"/> class.
        /// </summary>
        public MappingProfiles()
        {
            this.CreateMap<Activity, Activity>();
        }
    }
}