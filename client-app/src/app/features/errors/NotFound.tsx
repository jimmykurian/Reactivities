/**
 * @file NotFound.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the NotFound component, which displays a user-friendly error message when a page is not found.
 */

import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

/**
 * NotFound component displays a message indicating that the requested page could not be found.
 * It provides a button for users to navigate back to the activities page.
 *
 * @component
 * @returns {JSX.Element} The rendered NotFound component.
 *
 * @example
 * ```tsx
 * import NotFound from './NotFound';
 *
 * function App() {
 *   return (
 *     <BrowserRouter>
 *       <Routes>
 *         <Route path="*" element={<NotFound />} />
 *       </Routes>
 *     </BrowserRouter>
 *   );
 * }
 * ```
 */
export default function NotFound(): JSX.Element {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="search" />
        Oops - we&#39;ve looked everywhere and could not find what you are
        looking for!
      </Header>
      <Segment.Inline>
        <Button as={Link} to="/activities" primary>
          Return to activities page
        </Button>
      </Segment.Inline>
    </Segment>
  );
}
