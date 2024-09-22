/**
 * @file ActivityDetailedHeader.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityDetailedHeader component that displays the header section of an activity's details.
 */

import { observer } from 'mobx-react-lite';
import { Button, Header, Item, Segment, Image } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';
import { Link } from 'react-router-dom';

/**
 * @constant
 * @description The styling for the activity image to apply a brightness filter.
 * @type {Object}
 */
const activityImageStyle = {
  filter: 'brightness(30%)',
};

/**
 * @constant
 * @description The styling for the text overlay on the activity image.
 * @type {Object}
 */
const activityImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white',
};

/**
 * @interface Props
 * @description The properties for the ActivityDetailedHeader component.
 * @property {Activity} activity - The activity object containing details to display.
 */
export interface Props {
  activity: Activity;
}

/**
 * @component ActivityDetailedHeader
 * @description The ActivityDetailedHeader component displays the header section of an activity's details, including the activity image, title, date, and host information.
 *
 * @param {Props} props - The properties object containing the activity to display.
 * @param {Activity} props.activity - The activity object containing details to display.
 *
 * @returns {JSX.Element} The rendered ActivityDetailedHeader component.
 *
 * @remarks
 * This component uses Semantic UI React components to create a visually appealing header for the activity details page. It includes an image with a darkened filter, the activity title, date, and host information. It also provides buttons for joining, canceling attendance, and managing the event.
 *
 * @example
 * Here is an example of how to use the ActivityDetailedHeader component:
 * ```tsx
 * import React from 'react';
 * import ActivityDetailedHeader from './features/activities/details/ActivityDetailedHeader';
 * import { Activity } from '../../../models/activity';
 *
 * const activity: Activity = {
 *   id: '1',
 *   title: 'Sample Activity',
 *   description: 'This is a sample activity description.',
 *   date: '2024-01-01',
 *   city: 'Sample City',
 *   venue: 'Sample Venue',
 *   category: 'Sample Category',
 * };
 *
 * const App = () => (
 *   <div>
 *     <ActivityDetailedHeader activity={activity} />
 *   </div>
 * );
 *
 * export default App;
 * ```
 */
export default observer(function ActivityDetailedHeader({
  activity,
}: Props): JSX.Element {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image
          src={`/assets/categoryImages/${activity.category}.jpg`}
          fluid
          style={activityImageStyle}
        />
        <Segment style={activityImageTextStyle} basic>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={activity.title}
                  style={{ color: 'white' }}
                />
                <p>{activity.date}</p>
                <p>
                  Hosted by <strong>Bob</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment clearing attached="bottom">
        <Button color="teal">Join Activity</Button>
        <Button>Cancel attendance</Button>
        <Button
          as={Link}
          to={`/manage${activity.id}`}
          color="orange"
          floated="right"
        >
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
});
