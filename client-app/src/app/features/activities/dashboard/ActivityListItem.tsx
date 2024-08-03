/**
 * @file ActivityListItem.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityListItem component.
 */

import { Link } from 'react-router-dom';
import { Item, Button, Segment, Icon } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';
import { useState, SyntheticEvent } from 'react';
import { useStore } from '../../../stores/store';

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
 * It includes buttons for viewing and deleting the activity. The deletion process is handled
 * by the `handleActivityDelete` function which interacts with the MobX store's deleteActivity function.
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
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;
  const [target, setTarget] = useState('');

  /**
   * @function handleActivityDelete
   * @description Handles the deletion of an activity.
   * @param {SyntheticEvent<HTMLButtonElement>} e - The synthetic event triggered by clicking the delete button.
   * @param {string} id - The ID of the activity to delete.
   */
  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string,
  ): void {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

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
        <Button
          name={activity.id}
          loading={loading && target === activity.id}
          onClick={(e) => handleActivityDelete(e, activity.id)}
          color="red"
          floated="right"
          content="Delete"
        />
      </Segment>
    </Segment.Group>
  );
}
