import { isObservable } from 'mobx';
import ActivityStore from '../../../src/app/stores/activityStore';

describe('ActivityStore', () => {
  it('should initialize with the correct title', () => {
    // Arrange
    const expectedTitle = 'Hello from MobX!';

    // Act
    const activityStore = new ActivityStore();

    // Assert
    expect(activityStore.title).toBe(expectedTitle);
  });

  it('should have the title as an observable', () => {
    // Arrange & Act
    const activityStore = new ActivityStore();

    // Assert
    expect(isObservable(activityStore)).toBe(true);
  });
});
