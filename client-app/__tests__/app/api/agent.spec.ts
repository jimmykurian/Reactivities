import axios from 'axios';
import { Activity } from '../../../src/app/models/activity';
import agent from '../../../src/app/api/agent';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('agent', () => {
  const mockActivity: Activity = {
    id: '1',
    title: 'Test Activity',
    date: '2024-06-12',
    description: 'A test activity description',
    category: 'Test',
    city: 'Test City',
    venue: 'Test Venue',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Activities.list should fetch the list of activities', async () => {
    // Arrange
    const activities: Activity[] = [mockActivity];
    mockedAxios.get.mockResolvedValueOnce({ data: activities });

    // Act
    const result = await agent.Activities.list();

    // Assert
    expect(mockedAxios.get).toHaveBeenCalledWith('/activities');
    expect(result).toEqual(activities);
  });

  test('Activities.details should fetch the details of a specific activity', async () => {
    // Arrange
    mockedAxios.get.mockResolvedValueOnce({ data: mockActivity });

    // Act
    const result = await agent.Activities.details(mockActivity.id);

    // Assert
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/activities/${mockActivity.id}`,
    );
    expect(result).toEqual(mockActivity);
  });

  test('Activities.create should create a new activity', async () => {
    // Arrange
    mockedAxios.post.mockResolvedValueOnce({ data: {} });

    // Act
    await agent.Activities.create(mockActivity);

    // Assert
    expect(mockedAxios.post).toHaveBeenCalledWith('/activities', mockActivity);
  });

  test('Activities.update should update an existing activity', async () => {
    // Arrange
    mockedAxios.put.mockResolvedValueOnce({ data: {} });

    // Act
    await agent.Activities.update(mockActivity);

    // Assert
    expect(mockedAxios.put).toHaveBeenCalledWith(
      `/activities/${mockActivity.id}`,
      mockActivity,
    );
  });

  test('Activities.delete should delete an activity by ID', async () => {
    // Arrange
    mockedAxios.delete.mockResolvedValueOnce({ data: {} });

    // Act
    await agent.Activities.delete(mockActivity.id);

    // Assert
    expect(mockedAxios.delete).toHaveBeenCalledWith(
      `/activities/${mockActivity.id}`,
    );
  });
});
