// <copyright file="DomainArchitectureTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Domain
{
    using FluentAssertions;
    using NetArchTest.Rules;

    /// <summary>
    /// Contains architecture tests for the Domain layer to ensure it adheres to the defined architectural rules.
    /// </summary>
    [TestClass]
    public class DomainArchitectureTests
    {
        /// <summary>
        /// Ensures that the Domain layer does not have a dependency on the Application layer.
        /// </summary>
        [TestMethod]
        public void DomainLayer_Should_Not_Have_Dependency_On_Application()
        {
            // Arrange
            var domainAssembly = typeof(Activity).Assembly;

            // Act
            var result = Types
                .InAssembly(domainAssembly)
                .ShouldNot()
                .HaveDependencyOn("Application")
                .GetResult();

            // Assert
            result.IsSuccessful.Should().BeTrue("Domain layer should not have a dependency on the Application layer.");
        }

        /// <summary>
        /// Ensures that the Domain layer does not have a dependency on the Persistence layer.
        /// </summary>
        [TestMethod]
        public void DomainLayer_Should_Not_Have_Dependency_On_Persistence()
        {
            // Arrange
            var domainAssembly = typeof(Activity).Assembly;

            // Act
            var result = Types
                .InAssembly(domainAssembly)
                .ShouldNot()
                .HaveDependencyOn("Persistence")
                .GetResult();

            // Assert
            result.IsSuccessful.Should().BeTrue("Domain layer should not have a dependency on the Persistence layer.");
        }

        /// <summary>
        /// Ensures that the Domain layer does not have a dependency on the API layer.
        /// </summary>
        [TestMethod]
        public void DomainLayer_Should_Not_Have_Dependency_On_Api()
        {
            // Arrange
            var domainAssembly = typeof(Activity).Assembly;

            // Act
            var result = Types
                .InAssembly(domainAssembly)
                .ShouldNot()
                .HaveDependencyOn("API")
                .GetResult();

            // Assert
            result.IsSuccessful.Should().BeTrue("Domain layer should not have a dependency on the API layer.");
        }

        /// <summary>
        /// Ensures that the Domain layer does not have dependencies on any external UI frameworks.
        /// </summary>
        [TestMethod]
        public void DomainLayer_Should_Not_Have_Dependency_On_External_UI_Libraries()
        {
            // Arrange
            var domainAssembly = typeof(Activity).Assembly;

            // Act
            var result = Types
                .InAssembly(domainAssembly)
                .ShouldNot()
                .HaveDependencyOn("Microsoft.AspNetCore")
                .GetResult();

            // Assert
            result.IsSuccessful.Should().BeTrue("Domain layer should not depend on external UI frameworks.");
        }

        /// <summary>
        /// Log any invalid dependencies in the Domain layer, such as API, Application, or Persistence dependencies.
        /// </summary>
        [TestMethod]
        public void DomainLayer_Log_Invalid_Dependencies()
        {
            // Arrange
            var domainAssembly = typeof(Activity).Assembly;

            // Act
            var invalidDependencies = Types
                .InAssembly(domainAssembly)
                .That()
                .HaveDependencyOn("API")
                .Or()
                .HaveDependencyOn("Application")
                .Or()
                .HaveDependencyOn("Persistence")
                .GetTypes();

            // Assert
            invalidDependencies.Should().BeEmpty("No Domain layer classes should have dependencies on the API, Application, or Persistence layers.");
        }
    }
}
