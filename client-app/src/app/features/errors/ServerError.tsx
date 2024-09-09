/**
 * @file ServerError.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ServerError component, which is responsible for displaying server-related errors to the user.
 * The component fetches the error details from the MobX store and displays them with relevant headers and formatting.
 */

import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { Container, Header, Segment } from 'semantic-ui-react';

/**
 * ServerError component displays a server error message and optionally shows the error's stack trace details.
 * It retrieves the error information from the MobX `commonStore` and renders it in a user-friendly format.
 *
 * @component
 * @returns {JSX.Element} The rendered ServerError component displaying error details and stack trace if available.
 *
 * @example
 * ```tsx
 * import ServerError from './ServerError';
 *
 * function App() {
 *   return <ServerError />;
 * }
 * ```
 */
export default observer(function ServerError(): JSX.Element {
  const { commonStore } = useStore();

  return (
    <Container>
      <Header as="h1" content="Server Error" />
      <Header sub as="h5" color="red" content={commonStore.error?.message} />
      {commonStore.error?.details && (
        <Segment>
          <Header as="h4" content="Stack trace" color="teal" />
          <code style={{ marginTop: '10px' }}>{commonStore.error.details}</code>
        </Segment>
      )}
    </Container>
  );
});
