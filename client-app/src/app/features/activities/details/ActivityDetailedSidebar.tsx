/**
 * @file ActivityDetailedSidebar.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityDetailedSidebar component.
 */

import { Segment, List, Label, Item, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

/**
 * @component ActivityDetailedSidebar
 * @description The ActivityDetailedSidebar component displays a sidebar with a list of people going to the activity.
 *
 * @returns {JSX.Element} The rendered ActivityDetailedSidebar component.
 *
 * @remarks
 * This component uses Semantic UI React components to create a styled sidebar. It includes a segment header displaying the number of people going to the activity and a list of attendees. Each attendee is shown with an image, name, and an optional "Following" label. The host is marked with an orange ribbon.
 *
 * @example
 * Here is an example of how to use the ActivityDetailedSidebar component:
 * ```tsx
 * import React from 'react';
 * import ActivityDetailedSidebar from './features/activities/details/ActivityDetailedSidebar';
 *
 * const App = () => (
 *   <div>
 *     <ActivityDetailedSidebar />
 *   </div>
 * );
 *
 * export default App;
 * ```
 */
export default observer(function ActivityDetailedSidebar(): JSX.Element {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        3 People Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          <Item style={{ position: 'relative' }}>
            <Label
              style={{ position: 'absolute' }}
              color="orange"
              ribbon="right"
            >
              Host
            </Label>
            <Image size="tiny" src={'/assets/user.png'} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Link to={`#`}>Bob</Link>
              </Item.Header>
              <Item.Extra style={{ color: 'orange' }}>Following</Item.Extra>
            </Item.Content>
          </Item>

          <Item style={{ position: 'relative' }}>
            <Image size="tiny" src={'/assets/user.png'} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Link to={`#`}>Tom</Link>
              </Item.Header>
              <Item.Extra style={{ color: 'orange' }}>Following</Item.Extra>
            </Item.Content>
          </Item>

          <Item style={{ position: 'relative' }}>
            <Image size="tiny" src={'/assets/user.png'} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Link to={`#`}>Sally</Link>
              </Item.Header>
            </Item.Content>
          </Item>
        </List>
      </Segment>
    </>
  );
});
