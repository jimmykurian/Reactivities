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

/**
 * The App component serves as the root component for the React application.
 * It fetches activities from an API, maintains the activities state, and renders the NavBar and ActivityDashboard components.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 *
 * @remarks
 * The App component uses the `useEffect` hook to fetch activities from the API when the component mounts.
 * The `useState` hook is used to manage the activities state, the selected activity state, the edit mode state, the loading state, and the submitting state.
 * The component includes the NavBar and ActivityDashboard components for displaying the navigation bar and list of activities, respectively.
 * The `handleSelectActivity`, `handleCancelSelectActivity`, `handleFormOpen`, `handleFormClose`, `handleCreateOrEditActivity`, and `handleDeleteActivity` functions are used to manage the selected activity and edit mode states, as well as creating, editing, and deleting activities.
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
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Activities.list().then((response) => {
      const activities: Activity[] = [];
      response.forEach((activity) => {
        activity.date = activity.date.split('T')[0];
        activities.push(activity);
      });
      setActivities(activities);
      setLoading(false);
    });
  }, []);

  /**
   * Handles selecting an activity by its ID.
   *
   * @param {string} id - The ID of the activity to select.
   */
  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find((a) => a.id === id));
  }

  /**
   * Handles canceling the selection of an activity.
   */
  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  /**
   * Opens the form for creating or editing an activity.
   *
   * @param {string} [id] - The ID of the activity to edit, or undefined to create a new activity.
   */
  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  /**
   * Closes the form for creating or editing an activity.
   */
  function handleFormClose() {
    setEditMode(false);
  }

  /**
   * Handles creating or editing an activity.
   *
   * @param {Activity} activity - The activity object to create or edit.
   */
  function handleCreateOrEditActivity(activity: Activity) {
    setSubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([
          ...activities.filter((a) => a.id !== activity.id),
          activity,
        ]);
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
  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter((a) => a.id !== id)]);
  }

  if (loading) return <LoadingComponent content="Loading app..." />;

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
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

export default App;
