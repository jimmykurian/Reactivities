/**
 * @file activityStore.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityStore class which manages the state of activities using MobX.
 */

import { makeAutoObservable, runInAction } from 'mobx';
import { Activity } from '../models/activity';
import agent from '../api/agent';
import { v4 as uuid } from 'uuid';

/**
 * @class ActivityStore
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
  /** @type {Map<string, Activity>} */
  activityRegistry: Map<string, Activity> = new Map<string, Activity>();

  /** @type {Activity | undefined} */
  selectedActivity: Activity | undefined = undefined;

  /** @type {boolean} */
  editMode: boolean = false;

  /** @type {boolean} */
  loading: boolean = false;

  /** @type {boolean} */
  loadingInitial: boolean = true;

  /**
   * @constructor ActivityStore
   * @description Creates an instance of ActivityStore.
   * Initializes the observables using MobX's makeAutoObservable.
   */
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * @getter activitiesByDate
   * @description Gets the activities sorted by date.
   * @returns {Activity[]}
   */
  get activitiesByDate(): Activity[] {
    return Array.from(this.activityRegistry.values()).sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date),
    );
  }

  /**
   * @async
   * @function loadActivities
   * @description Loads activities from the API and sets the activities state.
   * @returns {Promise<void>}
   */
  loadActivities = async (): Promise<void> => {
    try {
      const activities = await agent.Activities.list();
      runInAction(() => {
        activities.forEach((activity: Activity) => {
          activity.date = activity.date.split('T')[0];
          this.activityRegistry.set(activity.id, activity);
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

  /**.
   * @function setLoadingInitial
   * @description Sets the loading initial state
   * @param {boolean} state - The loading state to set.
   */
  setLoadingInitial = (state: boolean): void => {
    this.loadingInitial = state;
  };

  /**
   * @function selectActivity
   * @description Selects an activity by its ID.
   * @param {string} id - The ID of the activity to select.
   */
  selectActivity = (id: string): void => {
    this.selectedActivity = this.activityRegistry.get(id);
  };

  /**
   * @function cancelSelectedActivity
   * @description Cancels the selection of the currently selected activity.
   */
  cancelSelectedActivity = (): void => {
    this.selectedActivity = undefined;
  };

  /**
   * @function openForm
   * @description Opens the form for creating or editing an activity.
   * @param {string} [id] - The ID of the activity to edit, if any.
   */
  openForm = (id?: string): void => {
    id ? this.selectActivity(id) : this.cancelSelectedActivity();
    this.editMode = true;
  };

  /**
   * @function closeForm
   * @description Closes the form for creating or editing an activity.
   */
  closeForm = (): void => {
    this.editMode = false;
  };

  /**
   * @async
   * @function createActivity
   * @description Creates a new activity.
   * @param {Activity} activity - The activity to create.
   * @returns {Promise<void>}
   */
  createActivity = async (activity: Activity): Promise<void> => {
    this.loading = true;
    activity.id = uuid();
    try {
      await agent.Activities.create(activity);
      runInAction(() => {
        this.activityRegistry.set(activity.id, activity);
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
   * @async
   * @function updateActivity
   * @description Updates an existing activity.
   * @param {Activity} activity - The activity to update.
   * @returns {Promise<void>}
   */
  updateActivity = async (activity: Activity): Promise<void> => {
    this.loading = true;
    try {
      await agent.Activities.update(activity);
      runInAction(() => {
        this.activityRegistry.set(activity.id, activity);
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
   * @async
   * @function deleteActivity
   * @description Deletes an activity by its ID.
   * @param {string} id - The ID of the activity to delete.
   * @returns {Promise<void>}
   */
  deleteActivity = async (id: string): Promise<void> => {
    this.loading = true;
    try {
      await agent.Activities.delete(id);
      runInAction(() => {
        this.activityRegistry.delete(id);
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
