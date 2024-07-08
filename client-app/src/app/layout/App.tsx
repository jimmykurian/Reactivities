/**
 * @file App.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the App component which serves as the root component for the React application.
 */

import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';

/**
 * @component App
 * @description The App component serves as the root component for the React application.
 * It renders the NavBar component and uses the Outlet component from react-router-dom to render matched child routes.
 *
 * @returns {JSX.Element} The rendered App component.
 *
 * @example
 * ```tsx
 * // App component
 * return (
 *   <>
 *     <NavBar />
 *     <Container style={{ marginTop: '7em' }}>
 *       <Outlet />
 *     </Container>
 *   </>
 * );
 * ```
 */
function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Outlet />
      </Container>
    </>
  );
}

export default observer(App);
