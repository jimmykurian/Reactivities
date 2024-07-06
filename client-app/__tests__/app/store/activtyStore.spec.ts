import { isObservableProp, isObservableMap, runInAction } from 'mobx';
import { faker } from '@faker-js/faker';
import ActivityStore from '../../../src/app/stores/activityStore';
import { Activity } from '../../../src/app/models/activity';
import agent from '../../../src/app/api/agent';

jest.mock('../../../src/app/api/agent');

// Suppress console.log errors during tests
beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

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
    const expectedActivities: Map<string, Activity> = new Map();
    const expectedSelectedActivity = undefined;
    const expectedEditMode = false;
    const expectedLoading = false;
    const expectedLoadingInitial = true;

    // Act
    const activityStore = new ActivityStore();

    // Assert
    expect(activityStore.activityRegistry.size).toBe(expectedActivities.size);
    expect(activityStore.selectedActivity).toBe(expectedSelectedActivity);
    expect(activityStore.editMode).toBe(expectedEditMode);
    expect(activityStore.loading).toBe(expectedLoading);
    expect(activityStore.loadingInitial).toBe(expectedLoadingInitial);
  });

  it('should have observables for activityRegistry, selectedActivity, editMode, loading, and loadingInitial', () => {
    // Arrange & Act
    const activityStore = new ActivityStore();

    // Assert
    expect(isObservableMap(activityStore.activityRegistry)).toBe(true);
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
    expect(activityStore.activityRegistry.size).toBe(5);
    mockActivities.forEach(activity => {
      expect(activityStore.activityRegistry.get(activity.id)).toEqual(activity);
    });
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
    expect(activityStore.activityRegistry.get(newActivity.id)).toEqual(newActivity);
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
      activityStore.activityRegistry.set(existingActivity.id, existingActivity);
    });

    // Act
    await activityStore.updateActivity(updatedActivity);

    // Assert
    expect(activityStore.activityRegistry.get(updatedActivity.id)).toEqual(updatedActivity);
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
      activityStore.activityRegistry.set(existingActivity.id, existingActivity);
    });

    // Act
    await activityStore.deleteActivity(existingActivity.id);

    // Assert
    expect(activityStore.activityRegistry.has(existingActivity.id)).toBe(false);
    expect(activityStore.selectedActivity).toBeUndefined();
    expect(activityStore.loading).toBe(false);
  });

  it('should select an activity', () => {
    // Arrange
    const existingActivity = generateMockActivity();
    const activityStore = new ActivityStore();

    runInAction(() => {
      activityStore.activityRegistry.set(existingActivity.id, existingActivity);
    });

    // Act
    activityStore.selectActivity(existingActivity.id);

    // Assert
    expect(activityStore.selectedActivity).toEqual(existingActivity);
  });

  it('should cancel the selected activity', () => {
    // Arrange
    const existingActivity = generateMockActivity();
    const activityStore = new ActivityStore();

    runInAction(() => {
      activityStore.activityRegistry.set(existingActivity.id, existingActivity);
      activityStore.selectedActivity = existingActivity;
    });

    // Act
    activityStore.cancelSelectedActivity();

    // Assert
    expect(activityStore.selectedActivity).toBeUndefined();
  });

  it('should open the form for creating a new activity', () => {
    // Arrange
    const activityStore = new ActivityStore();

    // Act
    activityStore.openForm();

    // Assert
    expect(activityStore.editMode).toBe(true);
    expect(activityStore.selectedActivity).toBeUndefined();
  });

  it('should open the form for editing an existing activity', () => {
    // Arrange
    const existingActivity = generateMockActivity();
    const activityStore = new ActivityStore();

    runInAction(() => {
      activityStore.activityRegistry.set(existingActivity.id, existingActivity);
    });

    // Act
    activityStore.openForm(existingActivity.id);

    // Assert
    expect(activityStore.editMode).toBe(true);
    expect(activityStore.selectedActivity).toEqual(existingActivity);
  });

  it('should close the form', () => {
    // Arrange
    const activityStore = new ActivityStore();

    runInAction(() => {
      activityStore.editMode = true;
    });

    // Act
    activityStore.closeForm();

    // Assert
    expect(activityStore.editMode).toBe(false);
  });

  it('should handle errors during activity loading', async () => {
    // Arrange
    (agent.Activities.list as jest.Mock).mockRejectedValue(new Error('Failed to load activities'));
    const activityStore = new ActivityStore();

    // Act
    await activityStore.loadActivities();

    // Assert
    expect(activityStore.loadingInitial).toBe(false);
  });

  it('should handle errors during activity creation', async () => {
    // Arrange
    const newActivity = generateMockActivity();
    (agent.Activities.create as jest.Mock).mockRejectedValue(new Error('Failed to create activity'));
    const activityStore = new ActivityStore();

    // Act
    await activityStore.createActivity(newActivity);

    // Assert
    expect(activityStore.loading).toBe(false);
    expect(activityStore.activityRegistry.has(newActivity.id)).toBe(false);
  });

  it('should handle errors during activity update', async () => {
    // Arrange
    const existingActivity = generateMockActivity();
    const updatedActivity = { ...existingActivity, title: 'Updated Title' };
    (agent.Activities.update as jest.Mock).mockRejectedValue(new Error('Failed to update activity'));
    const activityStore = new ActivityStore();

    runInAction(() => {
      activityStore.activityRegistry.set(existingActivity.id, existingActivity);
    });

    // Act
    await activityStore.updateActivity(updatedActivity);

    // Assert
    expect(activityStore.loading).toBe(false);
    expect(activityStore.activityRegistry.get(existingActivity.id)).toEqual(existingActivity);
  });

  it('should handle errors during activity deletion', async () => {
    // Arrange
    const existingActivity = generateMockActivity();
    (agent.Activities.delete as jest.Mock).mockRejectedValue(new Error('Failed to delete activity'));
    const activityStore = new ActivityStore();

    runInAction(() => {
      activityStore.activityRegistry.set(existingActivity.id, existingActivity);
    });

    // Act
    await activityStore.deleteActivity(existingActivity.id);

    // Assert
    expect(activityStore.loading).toBe(false);
    expect(activityStore.activityRegistry.has(existingActivity.id)).toBe(true);
  });

  it('should get activities sorted by date', () => {
    // Arrange
    const activities: Activity[] = [
      { ...generateMockActivity(), date: '2022-01-01' },
      { ...generateMockActivity(), date: '2023-01-01' },
      { ...generateMockActivity(), date: '2024-01-01' },
    ];
    const activityStore = new ActivityStore();

    runInAction(() => {
      activities.forEach(activity => {
        activityStore.activityRegistry.set(activity.id, activity);
      });
    });

    // Act
    const sortedActivities = activityStore.activitiesByDate;

    // Assert
    expect(sortedActivities.length).toBe(3);
    expect(sortedActivities[0].date).toBe('2022-01-01');
    expect(sortedActivities[1].date).toBe('2023-01-01');
    expect(sortedActivities[2].date).toBe('2024-01-01');
  });
});
