/**
 * @file ActivityDetailedInfo.tsx
 * @fileoverview This file contains the ActivityDetailedInfo component.
 * @author Jimmy Kurian
 */

import { observer } from 'mobx-react-lite';
import { Segment, Grid, Icon } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';

/**
 * @interface Props
 * @description The properties for the ActivityDetailedInfo component.
 * @property {Activity} activity - The activity object containing details to display.
 */
export interface Props {
  activity: Activity;
}

/**
 * @component ActivityDetailedInfo
 * @description The ActivityDetailedInfo component displays detailed information about an activity.
 *
 * @param {Props} props - The properties object containing the activity to display.
 * @param {Activity} props.activity - The activity object containing details to display.
 *
 * @returns {JSX.Element} The rendered ActivityDetailedInfo component.
 *
 * @remarks
 * This component uses Semantic UI React components to create a segmented layout displaying the description, date, and venue of the activity.
 * Each segment includes an icon and the corresponding information from the activity object.
 *
 * @example
 * Here is an example of how to use the ActivityDetailedInfo component:
 * ```tsx
 * import React from 'react';
 * import ActivityDetailedInfo from './features/activities/details/ActivityDetailedInfo';
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
 *     <ActivityDetailedInfo activity={activity} />
 *   </div>
 * );
 *
 * export default App;
 * ```
 */
export default observer(function ActivityDetailedInfo({
  activity,
}: Props): JSX.Element {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{activity.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{activity.date}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>
              {activity.venue}, {activity.city}
            </span>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
});
