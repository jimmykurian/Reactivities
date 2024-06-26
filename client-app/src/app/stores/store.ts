/**
 * @author Jimmy Kurian
 * @name Store
 */

import { createContext, useContext } from 'react';
import ActivityStore from './activityStore';

/**
 * Interface representing the structure of the store.
 *
 * @interface Store
 * @property {ActivityStore} activityStore - Instance of ActivityStore for managing activity-related state.
 */
interface Store {
  activityStore: ActivityStore;
}

/**
 * The store instance containing all the application's stores.
 *
 * @constant
 * @type {Store}
 */
export const store: Store = {
  activityStore: new ActivityStore(),
};

/**
 * The React context for the store.
 *
 * @constant
 * @type {React.Context<Store>}
 */
export const StoreContext = createContext(store);

/**
 * Custom hook to use the store in React components.
 *
 * @function
 * @returns {Store} The store instance.
 *
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
