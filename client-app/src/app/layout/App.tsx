/**
 * @author Jimmy Kurian
 * @name App
 */

import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
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
 * The `useState` hook is used to manage the submitting state.
 * The component includes the NavBar and ActivityDashboard components for displaying the navigation bar and list of activities, respectively.
 * The `handleDeleteActivity` function is used to manage deleting activities.
 * The component also accesses the `activityStore` from the MobX store context to manage the activities.
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
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

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
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activityStore.activities}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
      </Container>
    </>
  );
}

export default observer(App);
