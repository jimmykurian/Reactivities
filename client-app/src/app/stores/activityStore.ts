/**
 * @author Jimmy Kurian
 * @name ActivityStore
 */

import { makeAutoObservable } from 'mobx';
import { Activity } from '../models/activity';
import agent from '../api/agent';

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
 * activityStore.loadActivities();
 * ```
 */
export default class ActivityStore {
  activities: Activity[] = [];
  selectedActivity: Activity | null = null;
  editMode = false;
  loading = false;
  loadingInitial = false;

  /**
   * Creates an instance of ActivityStore.
   * The constructor initializes the observables using MobX's makeAutoObservable.
   */
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Loads activities from the API and sets the activities state.
   *
   * @async
   * @function
   * @returns {Promise<void>}
   */
  loadActivities = async () => {
    this.setLoadingInitial(true);
    try {
      const activities = await agent.Activities.list();
      activities.forEach((activity: Activity) => {
        activity.date = activity.date.split('T')[0];
        this.activities.push(activity);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  /**
   * Sets the loading initial state.
   *
   * @function
   * @param {boolean} state - The loading state to set.
   */
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}
