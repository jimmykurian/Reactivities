// <copyright file="BaseApiController.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Base API controller for common API functionalities.
    /// </summary>
    [ApiController]
    [Route("[api/controller]")]
    public class BaseApiController : Controller
    {
    }
}
