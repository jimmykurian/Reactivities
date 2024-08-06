/**
 * @file HomePage.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the HomePage component which serves as the home page of the application.
 */

import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';

/**
 * @component HomePage
 * @description The HomePage component serves as the home page of the application. It displays a heading, a welcome message, and a button that links to the activities page within a container.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 *
 * @remarks
 * This component uses the Semantic UI React library to create a styled container.
 * The container includes a heading, a welcome message, and a button that navigates to the activities page.
 * The component is styled with an inverted segment and centered text.
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
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Reactivities
        </Header>
        <Header as="h2" inverted content="Welcome to Reactivities" />
        <Button as={Link} to="/activities" size="huge" inverted>
          Take me to the Activities!
        </Button>
      </Container>
    </Segment>
  );
}
