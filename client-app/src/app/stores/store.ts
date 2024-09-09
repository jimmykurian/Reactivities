/**
 * @file store.ts
 * @author Jimmy Kurian
 * @fileoverview This file contains the store for the application.
 */

import { createContext, useContext } from 'react';
import ActivityStore from './activityStore';
import CommonStore from './commonStore';

/**
 * @interface Store
 * @description interface representing the structure of the store.
 *
 * @property {ActivityStore} activityStore - Instance of ActivityStore for managing activity-related state.
 */
export interface Store {
  activityStore: ActivityStore;
  commonStore: CommonStore;
}

/**
 * @constant store
 * @description The store instance containing all the application's stores.
 * @type {Store}
 */
export const store: Store = {
  activityStore: new ActivityStore(),
  commonStore: new CommonStore(),
};

/**
 * @constant StoreContext
 * @description The React context for the store.
 * @type {React.Context<Store>}
 */
export const StoreContext: React.Context<Store> = createContext(store);

/**
 * @function Store
 * @description Custom hook to use the store in React components.
 * @returns {Store} The store instance.
 * @example
 * ```tsx
 * import { useStore } from './store';
 *
 * const MyComponent = () => {
 *   const { activityStore } = useStore();
 *   return <div>{activityStore.title}</div>;
 * };
 * ```
 */
export function useStore(): Store {
  return useContext(StoreContext);
}
