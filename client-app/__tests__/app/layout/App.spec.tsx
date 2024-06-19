import { render, screen, waitFor } from '@testing-library/react';
import App from '../../../src/app/layout/App';
import agent from '../../../src/app/api/agent';
import { Activity } from '../../../src/app/models/activity';
import { faker } from '@faker-js/faker';

// Mock the agent
jest.mock('../../../src/app/api/agent');

describe('App', () => {
  const generateMockActivity = (): Activity => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    date: faker.date.future().toISOString().split('T')[0],
    description: faker.lorem.sentence(),
    category: faker.lorem.word(),
    city: faker.location.city(),
    venue: faker.location.streetAddress(),
  });

  const staticMockActivities: Activity[] = [
    {
      id: '1',
      title: 'Static Test Activity 1',
      date: '2024-06-12',
      description: 'Static Description 1',
      category: 'Static Category 1',
      city: 'Static City 1',
      venue: 'Static Venue 1',
    },
    {
      id: '2',
      title: 'Static Test Activity 2',
      date: '2024-07-12',
      description: 'Static Description 2',
      category: 'Static Category 2',
      city: 'Static City 2',
      venue: 'Static Venue 2',
    },
  ];

  beforeEach(() => {
    (agent.Activities.list as jest.Mock).mockResolvedValue([
      generateMockActivity(),
      generateMockActivity(),
    ]);
  });

  test('renders Reactivities heading', async () => {
    // Arrange
    render(<App />);

    // Act
    const headingElement = await waitFor(() =>
      screen.getByText(/Reactivities/i),
    );

    // Assert
    expect(headingElement).toBeInTheDocument();
  });

  test('matches snapshot', async () => {
    // Arrange
    (agent.Activities.list as jest.Mock).mockResolvedValueOnce(
      staticMockActivities,
    );
    const { asFragment } = render(<App />);

    // Act
    await waitFor(() => screen.getByText(/Reactivities/i));

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
