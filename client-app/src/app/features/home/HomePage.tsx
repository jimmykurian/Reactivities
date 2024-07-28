/**
 * @file HomePage.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the HomePage component which serves as the home page of the application.
 */

import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

/**
 * @component HomePage
 * @description The HomePage component serves as the home page of the application. It displays a heading and a link to the activities page within a container.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 *
 * @remarks
 * This component uses the Semantic UI React library to create a styled container.
 * The container includes a heading and a link that navigates to the activities page.
 *
 * @example
 * Here is an example of how to use the HomePage component:
 * ```tsx
 * import React from 'react';
 * import HomePage from './HomePage';
 *
 * const App = () => (
 *   <div>
 *     <HomePage />
 *   </div>
 * );
 *
 * export default App;
 * ```
 */
export default function HomePage(): JSX.Element {
  return (
    <Container style={{ marginTop: '7em' }}>
      <h1>Home page</h1>
      <h3>
        Go to <Link to="/activities">Activities</Link>
      </h3>
    </Container>
  );
}
