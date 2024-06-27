/**
 * @author Jimmy Kurian
 * @name ActivityStore
 */

import { makeAutoObservable } from 'mobx';

/**
 * ActivityStore class.
 *
 * @class
 * @classdesc This class represents the MobX store for managing activity-related state.
 * It initializes the observables and configures MobX for state management.
 *
 * @example
 * ```tsx
 * import ActivityStore from './ActivityStore';
 *
 * const activityStore = new ActivityStore();
 * console.log(activityStore.title); // Outputs: "Hello from MobX!"
 * activityStore.setTitle();
 * console.log(activityStore.title); // Outputs: "Hello from MobX!!"
 * ```
 */
export default class ActivityStore {
  /**
   * The title of the activity store.
   * @type {string}
   */
  title = 'Hello from MobX!';

  /**
   * Creates an instance of ActivityStore.
   * The constructor initializes the observables using MobX's makeAutoObservable.
   */
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Updates the title by appending an exclamation mark.
   */
  setTitle = () => {
    this.title = this.title + '!';
  };
}
