/**
 * @author Jimmy Kurian
 * @name App
 */

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';

/**
 * The App component serves as the root component for the React application.
 * It fetches activities from an API, maintains the activities state, and renders the NavBar and ActivityDashboard components.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 *
 * @remarks
 * The App component uses the `useEffect` hook to fetch activities from the API when the component mounts.
 * The `useState` hook is used to manage the activities state as well as the selected activity state.
 * The component includes the NavBar and ActivityDashboard components for displaying the navigation bar and list of activities, respectively.
 * The `handleSelectActivity` and `handleCancelSelectActivity` functions are used to manage the selected activity state.
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

  useEffect(() => {
    axios
      .get<Activity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        setActivities(response.data);
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

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
        />
      </Container>
    </>
  );
}

export default App;
