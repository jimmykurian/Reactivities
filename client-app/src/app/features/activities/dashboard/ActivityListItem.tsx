/**
 * @file ActivityListItem.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityListItem component which renders an individual activity item.
 */

import { Link } from 'react-router-dom';
import { Item, Button, Segment, Icon } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';

/**
 * @interface Props
 * @description The props object for the ActivityListItem component.
 * @property {Activity} activity - The activity to display.
 */
export interface Props {
  activity: Activity;
}

/**
 * @component ActivityListItem
 * @description A functional component that renders an individual activity item.
 *
 * @param {Props} props - The props object containing the activity data.
 * @returns {JSX.Element} The JSX element representing an individual activity item.
 *
 * @remarks
 * This component uses the Semantic UI React library to create a styled item layout
 * for displaying individual activity details such as title, date, description, city, and venue.
 * It includes buttons for viewing the activity. The component is designed to integrate with
 * the MobX store for managing activity data and state.
 *
 * @example
 * Here is an example of how to use the ActivityListItem component:
 * ```tsx
 * import React from 'react';
 * import { Activity } from '../../../models/activity';
 * import ActivityListItem from './ActivityListItem';
 *
 * const activity: Activity = {
 *   id: '1',
 *   title: 'Morning Run',
 *   date: '2024-06-12',
 *   description: 'A quick morning run around the park.',
 *   category: 'exercise',
 *   city: 'New York',
 *   venue: 'Central Park'
 * };
 *
 * <ActivityListItem activity={activity} />
 * ```
 */
export default function ActivityListItem({ activity }: Props): JSX.Element {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </Item.Header>
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {activity.date}
          <Icon name="marker" /> {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendees will go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}
