import { render, screen, waitFor } from '@testing-library/react';
import App from '../../../src/app/layout/App';
import { Activity } from '../../../src/app/models/activity';
import { useStore } from '../../../src/app/stores/store';
import { makeAutoObservable, runInAction } from 'mobx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Mock the agent and store
jest.mock('../../../src/app/api/agent');
jest.mock('../../../src/app/stores/store', () => ({
  useStore: jest.fn(),
}));

// Mocking ActivityDashboard component
const MockActivityDashboard = () => (
  <div>
    <div>Static Test Activity 1</div>
    <div>Static Test Activity 2</div>
  </div>
);

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

  class MockActivityStore {
    activities: Activity[] = [];
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;
    loadActivities = jest.fn().mockImplementation(async () => {
      runInAction(() => {
        this.activities = staticMockActivities;
        this.loadingInitial = false;
      });
    });

    get activitiesByDate() {
      return this.activities
        .slice()
        .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    }

    constructor() {
      makeAutoObservable(this);
    }
  }

  const mockStore = {
    activityStore: new MockActivityStore(),
  };

  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValue(mockStore);
    jest.clearAllMocks();
  });

  test('renders Reactivities heading', async () => {
    // Arrange
    render(
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<MockActivityDashboard />} />
          </Route>
        </Routes>
      </Router>,
    );

    // Act
    const headingElement = await waitFor(() =>
      screen.getByText(/Reactivities/i),
    );

    // Assert
    expect(headingElement).toBeInTheDocument();
  });

  test('matches snapshot', async () => {
    // Arrange
    const { asFragment } = render(
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<MockActivityDashboard />} />
          </Route>
        </Routes>
      </Router>,
    );

    // Act
    await waitFor(() => {
      expect(
        screen.getAllByText(/Static Test Activity/i).length,
      ).toBeGreaterThan(0);
    });

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
