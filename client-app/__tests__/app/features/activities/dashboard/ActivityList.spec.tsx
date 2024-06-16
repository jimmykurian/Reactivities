import { faker } from '@faker-js/faker';
import ActivityList from '../../../../../src/app/features/activities/dashboard/ActivityList';
import { Activity } from '../../../../../src/app/models/activity';
import { render, screen } from '@testing-library/react';

describe('ActivityList', () => {
  // Generate mock activities using Faker.js
  const generateMockActivity = (): Activity => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    date: faker.date.future().toISOString(),
    description: faker.lorem.sentence(),
    category: faker.lorem.word(),
    city: faker.location.city(),
    venue: faker.location.streetAddress(),
  });

  // Generate mock activities dynamically for other tests
  const mockActivities: Activity[] = Array.from(
    { length: 2 },
    generateMockActivity,
  );

  // Fixed mock activities for snapshot test
  const fixedMockActivities: Activity[] = [
    {
      id: '1',
      title: 'Fixed Title 1',
      date: '2023-12-31T23:59:59.000Z',
      description: 'Fixed description 1',
      category: 'Fixed category 1',
      city: 'Fixed city 1',
      venue: 'Fixed venue 1',
    },
    {
      id: '2',
      title: 'Fixed Title 2',
      date: '2024-01-01T23:59:59.000Z',
      description: 'Fixed description 2',
      category: 'Fixed category 2',
      city: 'Fixed city 2',
      venue: 'Fixed venue 2',
    },
  ];

  const selectActivity = jest.fn();
  const deleteActivity = jest.fn();

  test('renders the ActivityList component', () => {
    // Arrange
    render(
      <ActivityList
        activities={mockActivities}
        selectActivity={selectActivity}
        deleteActivity={deleteActivity}
      />,
    );

    // Act & Assert
    mockActivities.forEach((activity) => {
      const activityElement = screen.getByText(activity.title);
      expect(activityElement).toBeInTheDocument();
    });
  });

  test('matches snapshot', () => {
    // Arrange
    const { asFragment } = render(
      <ActivityList
        activities={fixedMockActivities}
        selectActivity={selectActivity}
        deleteActivity={deleteActivity}
      />,
    );

    // Act & Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
