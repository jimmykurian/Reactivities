import { isObservableArray, isObservableProp } from 'mobx';
import { faker } from '@faker-js/faker';
import ActivityStore from '../../../src/app/stores/activityStore';
import { Activity } from '../../../src/app/models/activity';
import agent from '../../../src/app/api/agent';
import { runInAction } from 'mobx';

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

  it('should create a new activity', async () => {
    // Arrange
    const newActivity = generateMockActivity();
    (agent.Activities.create as jest.Mock).mockResolvedValue(newActivity);

    const activityStore = new ActivityStore();

    // Act
    await activityStore.createActivity(newActivity);

    // Assert
    expect(activityStore.activities).toContainEqual(newActivity);
    expect(activityStore.selectedActivity).toEqual(newActivity);
    expect(activityStore.editMode).toBe(false);
    expect(activityStore.loading).toBe(false);
  });

  it('should update an existing activity', async () => {
    // Arrange
    const existingActivity = generateMockActivity();
    const updatedActivity = { ...existingActivity, title: 'Updated Title' };
    (agent.Activities.update as jest.Mock).mockResolvedValue(updatedActivity);

    const activityStore = new ActivityStore();

    runInAction(() => {
      activityStore.activities.push(existingActivity);
    });

    // Act
    await activityStore.updateActivity(updatedActivity);

    // Assert
    expect(activityStore.activities).toContainEqual(updatedActivity);
    expect(activityStore.activities).not.toContainEqual(existingActivity);
    expect(activityStore.selectedActivity).toEqual(updatedActivity);
    expect(activityStore.editMode).toBe(false);
    expect(activityStore.loading).toBe(false);
  });

  it('should delete an activity', async () => {
    // Arrange
    const existingActivity = generateMockActivity();
    (agent.Activities.delete as jest.Mock).mockResolvedValue(undefined);

    const activityStore = new ActivityStore();

    runInAction(() => {
      activityStore.activities.push(existingActivity);
    });

    // Act
    await activityStore.deleteActivity(existingActivity.id);

    // Assert
    expect(activityStore.activities).not.toContainEqual(existingActivity);
    expect(activityStore.selectedActivity).toBeUndefined();
    expect(activityStore.loading).toBe(false);
  });
});
