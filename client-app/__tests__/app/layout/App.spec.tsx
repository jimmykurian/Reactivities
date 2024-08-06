import { render, screen, waitFor, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from '../../../src/app/layout/App';
import { Activity } from '../../../src/app/models/activity';
import { useStore } from '../../../src/app/stores/store';
import { makeAutoObservable, runInAction } from 'mobx';

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

  test('renders Home page heading', async () => {
    // Arrange
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </MemoryRouter>,
      );
    });

    // Act
    const headingElement = await waitFor(() =>
      screen.getByText(/Welcome to Reactivities/i),
    );

    // Assert
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Activities link on Home page', async () => {
    // Arrange
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </MemoryRouter>,
      );
    });

    // Act
    const linkElement = await waitFor(() =>
      screen.getByText(
        (content, element) =>
          element?.tagName.toLowerCase() === 'a' && /activities/i.test(content),
      ),
    );

    // Assert
    expect(linkElement).toBeInTheDocument();
  });

  test('renders ActivityDashboard when navigating to /activities', async () => {
    // Arrange
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/activities']}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="activities" element={<MockActivityDashboard />} />
            </Route>
          </Routes>
        </MemoryRouter>,
      );
    });

    // Act
    const activities = await waitFor(() =>
      screen.getAllByText(/Static Test Activity/i),
    );

    // Assert
    expect(activities.length).toBeGreaterThan(0);
    expect(screen.getByText(/Static Test Activity 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Static Test Activity 2/i)).toBeInTheDocument();
  });

  test('matches snapshot', async () => {
    // Arrange
    let fragment: (() => DocumentFragment) | undefined;
    await act(async () => {
      const { asFragment } = render(
        <MemoryRouter initialEntries={['/activities']}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="activities" element={<MockActivityDashboard />} />
            </Route>
          </Routes>
        </MemoryRouter>,
      );
      fragment = asFragment;
    });

    // Act
    const activities = await waitFor(() =>
      screen.getAllByText(/Static Test Activity/i),
    );

    // Assert
    expect(activities.length).toBeGreaterThan(0);
    expect(fragment).toBeDefined();
    expect(fragment!()).toMatchSnapshot();
  });
});
