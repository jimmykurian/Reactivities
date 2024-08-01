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
   * @getter groupedActivities
   * @description Gets the activities grouped by date.
   * @returns {[string, Activity[]][]}
   */
  get groupedActivities(): [string, Activity[]][] {
    return Object.entries(
      this.activitiesByDate.reduce(
        (activities, activity) => {
          const date = activity.date;
          activities[date] = activities[date]
            ? [...activities[date], activity]
            : [activity];
          return activities;
        },
        {} as { [key: string]: Activity[] },
      ),
    );
  }

  /**
   * @async
   * @function loadActivities
   * @description Loads activities from the API and sets the activities state.
   * @returns {Promise<void>}
   */
  loadActivities = async (): Promise<void> => {
    this.setLoadingInitial(true);
    try {
      const activities = await agent.Activities.list();
      runInAction(() => {
        activities.forEach((activity: Activity) => {
          this.setActivity(activity);
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
   * @async
   * @function loadActivity
   * @description Loads a single activity by ID from the API or retrieves it from the local state.
   * @param {string} id - The ID of the activity to load.
   * @returns {Promise<Activity | undefined>}
   */
  loadActivity = async (id: string): Promise<Activity | undefined> => {
    let activity = this.getActivity(id);
    if (activity) {
      this.selectedActivity = activity;
      return activity;
    } else {
      this.setLoadingInitial(true);
      try {
        activity = await agent.Activities.details(id);
        this.setActivity;
        runInAction(() => (this.selectedActivity = activity));
        this.setLoadingInitial(false);
        return activity;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };

  /**
   * @private
   * @function setActivity
   * @description Sets an activity in the activity registry after formatting the date.
   * @param {Activity} activity - The activity to set.
   */
  private setActivity = (activity: Activity): void => {
    activity.date = activity.date.split('T')[0];
    this.activityRegistry.set(activity.id, activity);
  };

  /**
   * @private
   * @function getActivity
   * @description Retrieves an activity from the activity registry by ID.
   * @param {string} id - The ID of the activity to retrieve.
   * @returns {Activity | undefined}
   */
  private getActivity = (id: string): Activity | undefined => {
    return this.activityRegistry.get(id);
  };

  /**
   * @function setLoadingInitial
   * @description Sets the loading initial state.
   * @param {boolean} state - The loading state to set.
   */
  setLoadingInitial = (state: boolean): void => {
    this.loadingInitial = state;
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
