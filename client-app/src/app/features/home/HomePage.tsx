/**
 * @file HomePage.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the HomePage component which serves as the home page of the application.
 */

import { Container } from 'semantic-ui-react';

/**
 * @component HomePage
 * @description The HomePage component serves as the home page of the application. It displays a heading within a container.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 *
 * @example
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
    </Container>
  );
}
