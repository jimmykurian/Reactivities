import { render, screen, waitFor } from '@testing-library/react';
import ActivityDashboard from '../../../../../src/app/features/activities/dashboard/ActivityDashboard';
import { Activity } from '../../../../../src/app/models/activity';
import { useStore } from '../../../../../src/app/stores/store';
import { makeAutoObservable, runInAction } from 'mobx';

// Mock the store
jest.mock('../../../../../src/app/stores/store', () => ({
  useStore: jest.fn(),
}));

// Mocking ActivityList component
jest.mock(
  '../../../../../src/app/features/activities/dashboard/ActivityList',
  () => ({
    __esModule: true,
    default: () => <div>Mocked ActivityList</div>,
  }),
);

// Mocking ActivityDetails component
jest.mock(
  '../../../../../src/app/features/activities/details/ActivityDetails',
  () => ({
    __esModule: true,
    default: () => <div>Mocked ActivityDetails</div>,
  }),
);

// Mocking ActivityForm component
jest.mock(
  '../../../../../src/app/features/activities/form/ActivityForm',
  () => ({
    __esModule: true,
    default: () => <div>Mocked ActivityForm</div>,
  }),
);

// Mocking LoadingComponent component
jest.mock('../../../../../src/app/layout/LoadingComponent', () => ({
  __esModule: true,
  default: () => <div>Loading app...</div>,
}));

describe('ActivityDashboard', () => {
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

  test('renders the ActivityDashboard component', async () => {
    // Arrange
    render(<ActivityDashboard />);

    // Act & Assert
    await waitFor(() => {
      expect(screen.getByText('Mocked ActivityList')).toBeInTheDocument();
    });
  });

  test('displays ActivityDetails when selectedActivity is set and editMode is false', async () => {
    // Arrange
    mockStore.activityStore.selectedActivity = staticMockActivities[0];

    render(<ActivityDashboard />);

    // Act & Assert
    await waitFor(() => {
      expect(screen.getByText('Mocked ActivityDetails')).toBeInTheDocument();
    });
  });

  test('displays ActivityForm when editMode is true', async () => {
    // Arrange
    mockStore.activityStore.editMode = true;

    render(<ActivityDashboard />);

    // Act & Assert
    await waitFor(() => {
      expect(screen.getByText('Mocked ActivityForm')).toBeInTheDocument();
    });
  });

  xtest('displays LoadingComponent when loadingInitial is true', async () => {
    // Arrange
    mockStore.activityStore.loadingInitial = true;

    render(<ActivityDashboard />);

    // Act & Assert
    await waitFor(() => {
      expect(screen.getByText('Loading app...')).toBeInTheDocument();
    });
  });

  test('matches snapshot', async () => {
    // Arrange
    const { asFragment } = render(<ActivityDashboard />);

    // Act & Assert
    await waitFor(() => {
      expect(screen.getByText('Mocked ActivityList')).toBeInTheDocument();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
