/**
 * @file App.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the App component which serves as the root component for the React application.
 */

import { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

/**
 * @component App
 * @description The App component serves as the root component for the React application.
 * It fetches activities from an API, maintains the activities state, and renders the NavBar and ActivityDashboard components.
 * It also utilizes the MobX store for additional state management.
 *
 * @returns {JSX.Element} The rendered App component.
 *
 * @remarks
 * The App component uses the `useEffect` hook to fetch activities from the API when the component mounts.
 * It includes the NavBar and ActivityDashboard components for displaying the navigation bar and list of activities, respectively.
 * The component also accesses the `activityStore` from the MobX store context to manage the activities.
 * If the activities are still loading, it displays a LoadingComponent.
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

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) {
    return <LoadingComponent content="Loading app..." />;
  }

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
