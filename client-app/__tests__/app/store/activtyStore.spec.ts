import { isObservableArray, isObservableProp } from 'mobx';
import { faker } from '@faker-js/faker';
import ActivityStore from '../../../src/app/stores/activityStore';
import { Activity } from '../../../src/app/models/activity';
import agent from '../../../src/app/api/agent';

jest.mock('../../../src/app/api/agent');

describe('ActivityStore', () => {
  const generateMockActivity = (): Activity => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    date: faker.date.future().toISOString().split('T')[0],
    description: faker.lorem.sentence(),
    category: faker.lorem.word(),
    city: faker.location.city(),
    venue: faker.location.streetAddress(),
  });

  it('should initialize with the correct state', () => {
    // Arrange
    const expectedActivities: Activity[] = [];
    const expectedSelectedActivity = undefined;
    const expectedEditMode = false;
    const expectedLoading = false;
    const expectedLoadingInitial = false;

    // Act
    const activityStore = new ActivityStore();

    // Assert
    expect(activityStore.activities).toEqual(expectedActivities);
    expect(activityStore.selectedActivity).toBe(expectedSelectedActivity);
    expect(activityStore.editMode).toBe(expectedEditMode);
    expect(activityStore.loading).toBe(expectedLoading);
    expect(activityStore.loadingInitial).toBe(expectedLoadingInitial);
  });

  it('should have observables for activities, selectedActivity, editMode, loading, and loadingInitial', () => {
    // Arrange & Act
    const activityStore = new ActivityStore();

    // Assert
    expect(isObservableArray(activityStore.activities)).toBe(true);
    expect(isObservableProp(activityStore, 'selectedActivity')).toBe(true);
    expect(isObservableProp(activityStore, 'editMode')).toBe(true);
    expect(isObservableProp(activityStore, 'loading')).toBe(true);
    expect(isObservableProp(activityStore, 'loadingInitial')).toBe(true);
  });

  it('should load activities from the API', async () => {
    // Arrange
    const mockActivities: Activity[] = Array.from(
      { length: 5 },
      generateMockActivity,
    );
    (agent.Activities.list as jest.Mock).mockResolvedValue(mockActivities);

    const activityStore = new ActivityStore();

    // Act
    await activityStore.loadActivities();

    // Assert
    expect(activityStore.activities.length).toBe(5);
    expect(activityStore.activities).toEqual(
      expect.arrayContaining(mockActivities),
    );
    expect(activityStore.loadingInitial).toBe(false);
  });

  it('should set loadingInitial state correctly', () => {
    // Arrange
    const activityStore = new ActivityStore();

    // Act
    activityStore.setLoadingInitial(true);

    // Assert
    expect(activityStore.loadingInitial).toBe(true);

    // Act
    activityStore.setLoadingInitial(false);

    // Assert
    expect(activityStore.loadingInitial).toBe(false);
  });
});
