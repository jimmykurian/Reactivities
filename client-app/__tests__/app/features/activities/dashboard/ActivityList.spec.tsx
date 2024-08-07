import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { BrowserRouter as Router } from 'react-router-dom';
import { useStore } from '../../../../../src/app/stores/store';
import ActivityList from '../../../../../src/app/features/activities/dashboard/ActivityList';
import { makeAutoObservable, runInAction } from 'mobx';
import { Activity } from '../../../../../src/app/models/activity';

// Mock the store context
jest.mock('../../../../../src/app/stores/store', () => ({
  useStore: jest.fn(),
}));

describe('ActivityList', () => {
  const generateMockActivity = (): Activity => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    date: faker.date.future().toISOString().split('T')[0],
    description: faker.lorem.sentence(),
    category: faker.lorem.word(),
    city: faker.location.city(),
    venue: faker.location.streetAddress(),
  });

  const mockActivities: Activity[] = Array.from(
    { length: 2 },
    generateMockActivity,
  );

  const fixedMockActivities: Activity[] = [
    {
      id: '1',
      title: 'Fixed Title 1',
      date: '2023-12-31',
      description: 'Fixed description 1',
      category: 'Fixed category 1',
      city: 'Fixed city 1',
      venue: 'Fixed venue 1',
    },
    {
      id: '2',
      title: 'Fixed Title 2',
      date: '2024-01-01',
      description: 'Fixed description 2',
      category: 'Fixed category 2',
      city: 'Fixed city 2',
      venue: 'Fixed venue 2',
    },
  ];

  class MockActivityStore {
    activities: Activity[];
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;
    deleteActivity = jest.fn();
    selectActivity = jest.fn();
    cancelSelectedActivity = jest.fn();
    openForm = jest.fn();
    closeForm = jest.fn();
    createActivity = jest.fn();
    updateActivity = jest.fn();

    constructor(activities: Activity[]) {
      this.activities = activities;
      makeAutoObservable(this);
    }

    get groupedActivities() {
      const sortedActivities = this.activities
        .slice()
        .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
      return Object.entries(
        sortedActivities.reduce(
          (activities, activity) => {
            const date = activity.date;
            activities[date] = activities[date]
              ? [...activities[date], activity]
              : [activity];
            return activities;
          },
          {} as { [key: string]: Activity[] },
        ),
      );
    }

    setLoadingInitial = (state: boolean) => {
      this.loadingInitial = state;
    };

    loadActivities = async () => {
      this.setLoadingInitial(true);
      runInAction(() => {
        this.setLoadingInitial(false);
      });
    };
  }

  const createMockStore = (activities: Activity[]) => ({
    activityStore: new MockActivityStore(activities),
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the ActivityList component', () => {
    // Arrange
    const mockStore = createMockStore(mockActivities);
    (useStore as jest.Mock).mockReturnValue(mockStore);

    // Act
    render(
      <Router>
        <ActivityList />
      </Router>,
    );

    // Assert
    mockActivities.forEach((activity) => {
      const activityElements = screen.getAllByText(activity.title);
      expect(activityElements.length).toBeGreaterThan(0);
      activityElements.forEach((element) =>
        expect(element).toBeInTheDocument(),
      );
    });
  });

  test('matches snapshot', () => {
    // Arrange
    const mockStore = createMockStore(fixedMockActivities);
    (useStore as jest.Mock).mockReturnValue(mockStore);

    // Act
    const { asFragment } = render(
      <Router>
        <ActivityList />
      </Router>,
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
