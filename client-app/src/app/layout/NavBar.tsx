/**
 * @file NavBar.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the NavBar component which serves as the navigation bar for the Reactivities application.
 */

import { Button, Container, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * @component NavBar
 * @description The NavBar component serves as the navigation bar for the Reactivities application.
 * It includes a logo, a menu item for activities, and a button to create a new activity.
 *
 * @returns {JSX.Element} The rendered NavBar component.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import NavBar from './NavBar';
 *
 * function App() {
 *   return (
 *     <div>
 *       <NavBar />
 *       // other components
 *     </div>
 *   );
 * }
 *
 * export default App;
 * ```
 */
export default function NavBar(): JSX.Element {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: '10px' }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/activities"
          name="Activities"
          role="menuitem"
        />
        <Menu.Item as={NavLink} to="/errors" name="Errors" role="menuitem" />
        <Menu.Item>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
