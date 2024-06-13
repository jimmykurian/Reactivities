/**
 * @author Jimmy Kurian
 * @name NavBar
 */

import { Button, Container, Menu } from 'semantic-ui-react';

interface Props {
  /**
   * Function to open the form for creating a new activity.
   */
  openForm: () => void;
}

/**
 * The NavBar component serves as the navigation bar for the Reactivities application.
 * It includes a logo, a menu item for activities, and a button to create a new activity.
 *
 * @component
 * @param {Props} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered NavBar component.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import NavBar from './NavBar';
 *
 * function App() {
 *   const openForm = () => {
 *     // logic to open the form
 *   };
 *
 *   return (
 *     <div>
 *       <NavBar openForm={openForm} />
 *       // other components
 *     </div>
 *   );
 * }
 *
 * export default App;
 * ```
 */
export default function NavBar({ openForm }: Props): JSX.Element {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: '10px' }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" role="menuitem" />
        <Menu.Item>
          <Button onClick={openForm} positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
