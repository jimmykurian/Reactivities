import { render, screen, waitFor } from '@testing-library/react';
import App from '../../../src/app/layout/App';
import agent from '../../../src/app/api/agent';
import { Activity } from '../../../src/app/models/activity';

// Mock the agent
jest.mock('../../../src/app/api/agent');

describe('App', () => {
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
    (agent.Activities.list as jest.Mock).mockResolvedValue(
      staticMockActivities,
    );
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
    const { asFragment } = render(<App />);

    // Act
    await waitFor(() => screen.getAllByText(/Static Test Activity/i));

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
