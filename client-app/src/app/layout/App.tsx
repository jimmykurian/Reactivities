/**
 * @author Jimmy Kurian
 * @name App
 */

import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

/**
 * The App component serves as the root component for the React application.
 * It fetches activities from an API, maintains the activities state, and renders the NavBar and ActivityDashboard components.
 * It also utilizes the MobX store for additional state management.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 *
 * @remarks
 * The App component uses the `useEffect` hook to fetch activities from the API when the component mounts.
 * The `useState` hook is used to manage the activities state, the selected activity state, the edit mode state, the loading state, and the submitting state.
 * The component includes the NavBar and ActivityDashboard components for displaying the navigation bar and list of activities, respectively.
 * The `handleSelectActivity`, `handleCancelSelectActivity`, `handleFormOpen`, `handleFormClose`, `handleCreateOrEditActivity`, and `handleDeleteActivity` functions are used to manage the selected activity and edit mode states, as well as creating, editing, and deleting activities.
 * The component also accesses the `activityStore` from the MobX store context.
 *
 * Additionally, it includes a button to trigger the `setTitle` method from the `activityStore`, demonstrating interaction with the store.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import ReactDOM from 'react-dom/client';
 * import App from './App';
 *
 * ReactDOM.createRoot(document.getElementById('root')!).render(
 *   <React.StrictMode>
 *     <App />
 *   </React.StrictMode>,
 * );
 * ```
 */
function App(): JSX.Element {
  const { activityStore } = useStore();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  /**
   * Handles selecting an activity by its ID.
   *
   * @param {string} id - The ID of the activity to select.
   */
  function handleSelectActivity(id: string): void {
    setSelectedActivity(activities.find((a) => a.id === id));
  }

  /**
   * Handles canceling the selection of an activity.
   */
  function handleCancelSelectActivity(): void {
    setSelectedActivity(undefined);
  }

  /**
   * Opens the form for creating or editing an activity.
   *
   * @param {string} [id] - The ID of the activity to edit, or undefined to create a new activity.
   */
  function handleFormOpen(id?: string): void {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  /**
   * Closes the form for creating or editing an activity.
   */
  function handleFormClose(): void {
    setEditMode(false);
  }

  /**
   * Handles creating or editing an activity.
   *
   * @param {Activity} activity - The activity object to create or edit.
   */
  function handleCreateOrEditActivity(activity: Activity): void {
    setSubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities(
          activities.map((a) => (a.id === activity.id ? activity : a)),
        );
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      });
    }
  }

  /**
   * Handles deleting an activity.
   *
   * @param {string} id - The ID of the activity to delete.
   */
  function handleDeleteActivity(id: string): void {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities(activities.filter((a) => a.id !== id));
      setSubmitting(false);
    });
  }

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading app..." />;

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activityStore.activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
      </Container>
    </>
  );
}

export default observer(App);
