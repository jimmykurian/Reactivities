namespace Application.Activities
{
    using Bogus;
    using Domain;
    using FluentAssertions;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Logging;
    using Moq;
    using Persistence;
    using static Application.Activities.Details;

    /// <summary>
    /// Unit tests for the <see cref="Details"/> class.
    /// </summary>
    [TestClass]
    public class DetailsTests
    {
        private DataContext? context;
        private Handler? handler;
        private Faker<Activity>? faker;
        private Mock<ILogger<Handler>>? loggerMock;

        /// <summary>
        /// Initializes the test environment before each test.
        /// </summary>
        [TestInitialize]
        public void TestInitialize()
        {
            var options = new DbContextOptionsBuilder<DataContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;

            this.context = new DataContext(options);
            this.loggerMock = new Mock<ILogger<Handler>>();
            this.handler = new Handler(this.context, this.loggerMock.Object);

            // Initialize the Faker instance for Activity
            this.faker = new Faker<Activity>()
                .RuleFor(a => a.Id, f => f.Random.Guid())
                .RuleFor(a => a.Title, f => f.Lorem.Sentence())
                .RuleFor(a => a.Date, f => f.Date.Future())
                .RuleFor(a => a.Description, f => f.Lorem.Paragraph())
                .RuleFor(a => a.Category, f => f.Commerce.Categories(1)[0])
                .RuleFor(a => a.City, f => f.Address.City())
                .RuleFor(a => a.Venue, f => f.Address.StreetAddress());

            // Seed the in-memory database with test data
            var activities = this.faker.Generate(2);
            this.context.Activities.AddRange(activities);
            this.context.SaveChanges();
        }

        /// <summary>
        /// Tests that Handle returns the correct activity.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task Handle_ShouldReturnCorrectActivity()
        {
            // Arrange
            var activity = this.faker!.Generate();
            this.context!.Activities.Add(activity);
            await this.context.SaveChangesAsync();

            var query = new Query { Id = activity.Id };

            // Act
            var result = await this.handler!.Handle(query, CancellationToken.None);

            // Assert
            result.Should().NotBeNull();
            result.IsSuccess.Should().BeTrue();
            result.Value.Should().BeEquivalentTo(activity, options => options.Excluding(a => a.Id));

            this.loggerMock!.Verify(
                logger => logger.Log(
                    LogLevel.Information,
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("Fetching details for activity with ID")),
                    null,
                    It.IsAny<Func<It.IsAnyType, Exception?, string>>()),
                Times.Once);

            this.loggerMock!.Verify(
                logger => logger.Log(
                    LogLevel.Information,
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("Successfully fetched details for activity with ID")),
                    null,
                    It.IsAny<Func<It.IsAnyType, Exception?, string>>()),
                Times.Once);
        }

        /// <summary>
        /// Tests that Handle returns a failure result when the activity does not exist.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous unit test.</returns>
        [TestMethod]
        public async Task Handle_ShouldReturnFailureResultWhenActivityDoesNotExist()
        {
            // Arrange
            var query = new Query { Id = Guid.NewGuid() };

            // Act
            var result = await this.handler!.Handle(query, CancellationToken.None);

            // Assert
            result.Should().NotBeNull();
            result.IsSuccess.Should().BeFalse();
            result.Errors.Should().Contain(e => e.Message == "Activity not found.");

            this.loggerMock!.Verify(
                logger => logger.Log(
                    LogLevel.Warning,
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => v.ToString()!.Contains("Activity with ID")),
                    null,
                    It.IsAny<Func<It.IsAnyType, Exception?, string>>()),
                Times.Once);
        }

        /// <summary>
        /// Cleans up the test environment after each test.
        /// </summary>
        [TestCleanup]
        public void TestCleanup()
        {
            this.context?.Database.EnsureDeleted();
            this.context?.Dispose();
        }
    }
}
