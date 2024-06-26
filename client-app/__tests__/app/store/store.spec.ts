import React, { ReactNode } from 'react';
import { StoreContext, store, useStore } from '../../../src/app/stores/store';
import ActivityStore from '../../../src/app/stores/activityStore';
import { renderHook } from '@testing-library/react';

describe('Store', () => {
  it('should create a store with an activity store', () => {
    // Arrange, Act, & Assert
    expect(store).toHaveProperty('activityStore');
    expect(store.activityStore).toBeInstanceOf(ActivityStore);
  });

  it('should use the store context', () => {
    // Arrange
    const wrapper = ({ children }: { children: ReactNode }) =>
      React.createElement(StoreContext.Provider, { value: store }, children);

    // Act
    const { result } = renderHook(() => useStore(), { wrapper });

    // Assert
    expect(result.current).toBe(store);
    expect(result.current.activityStore).toBe(store.activityStore);
  });
});
