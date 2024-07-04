/**
 * @author Jimmy Kurian
 * @name ActivityStore
 */

import { makeAutoObservable, runInAction } from 'mobx';
import { Activity } from '../models/activity';
import agent from '../api/agent';
import { v4 as uuid } from 'uuid';

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
  selectedActivity: Activity | undefined = undefined;
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
  loadActivities = async (): Promise<void> => {
    this.setLoadingInitial(true);
    try {
      const activities = await agent.Activities.list();
      runInAction(() => {
        activities.forEach((activity: Activity) => {
          activity.date = activity.date.split('T')[0];
          this.activities.push(activity);
        });
        this.setLoadingInitial(false);
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.setLoadingInitial(false);
      });
    }
  };

  /**
   * Sets the loading initial state.
   *
   * @function
   * @param {boolean} state - The loading state to set.
   */
  setLoadingInitial = (state: boolean): void => {
    this.loadingInitial = state;
  };

  /**
   * Selects an activity by its ID.
   *
   * @function
   * @param {string} id - The ID of the activity to select.
   */
  selectActivity = (id: string): void => {
    this.selectedActivity = this.activities.find((a) => a.id === id);
  };

  /**
   * Cancels the selection of the currently selected activity.
   *
   * @function
   */
  cancelSelectedActivity = (): void => {
    this.selectedActivity = undefined;
  };

  /**
   * Opens the form for creating or editing an activity.
   *
   * @function
   * @param {string} [id] - The ID of the activity to edit, if any.
   */
  openForm = (id?: string): void => {
    id ? this.selectActivity(id) : this.cancelSelectedActivity();
    this.editMode = true;
  };

  /**
   * Closes the form for creating or editing an activity.
   *
   * @function
   */
  closeForm = (): void => {
    this.editMode = false;
  };

  /**
   * Creates a new activity.
   *
   * @async
   * @function
   * @param {Activity} activity - The activity to create.
   * @returns {Promise<void>}
   */
  createActivity = async (activity: Activity): Promise<void> => {
    this.loading = true;
    activity.id = uuid();
    try {
      await agent.Activities.create(activity);
      runInAction(() => {
        this.activities.push(activity);
        this.selectedActivity = activity;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  /**
   * Updates an existing activity.
   *
   * @async
   * @function
   * @param {Activity} activity - The activity to update.
   * @returns {Promise<void>}
   */
  updateActivity = async (activity: Activity): Promise<void> => {
    this.loading = true;
    try {
      await agent.Activities.update(activity);
      runInAction(() => {
        this.activities = [
          ...this.activities.filter((a) => a.id !== activity.id),
          activity,
        ];
        this.selectedActivity = activity;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  deleteActivity = async (id: string): Promise<void> => {
    this.loading = true;
    try {
      await agent.Activities.delete(id);
      runInAction(() => {
        this.activities = [...this.activities.filter((a) => a.id !== id)];
        if (this.selectedActivity?.id === id) this.cancelSelectedActivity();
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
