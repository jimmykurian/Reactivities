/**
 * @file App.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the App component which serves as the root component for the React application.
 */

import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../features/home/HomePage';
import { ToastContainer } from 'react-toastify';

/**
 * @component App
 * @description The App component serves as the root component for the React application.
 * It conditionally renders the HomePage component when the user is at the root path ('/').
 * For all other paths, it renders the NavBar component and uses the Outlet component from react-router-dom to render matched child routes.
 *
 * @returns {JSX.Element} The rendered App component.
 *
 * @example
 * Here is an example of how to use the App component:
 * ```tsx
 * import React from 'react';
 * import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 * import App from './App';
 * import HomePage from '../features/home/HomePage';
 * import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
 *
 * const MainApp = () => (
 *   <Router>
 *     <Routes>
 *       <Route path="/" element={<App />}>
 *         <Route index element={<HomePage />} />
 *         <Route path="activities" element={<ActivityDashboard />} />
 *       </Route>
 *     </Routes>
 *   </Router>
 * );
 *
 * export default MainApp;
 * ```
 */
function App(): JSX.Element {
  const location = useLocation();

  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar theme="cplored" />
      {location.pathname === '/' ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);
