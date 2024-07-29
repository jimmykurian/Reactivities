/**
 * @file ActivityListItem.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityListItem component.
 */

import { Link } from 'react-router-dom';
import { Item, Button, Label } from 'semantic-ui-react';
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
    <Item key={activity.id}>
      <Item.Content>
        <Item.Header as="a">{activity.title}</Item.Header>
        <Item.Meta>{activity.date}</Item.Meta>
        <Item.Description>
          <div>{activity.description}</div>
          <div>
            {activity.city}, {activity.venue}
          </div>
        </Item.Description>
        <Item.Extra>
          <Button
            as={Link}
            to={`/activities/${activity.id}`}
            floated="right"
            content="View"
            color="blue"
          />
          <Button
            name={activity.id}
            loading={loading && target === activity.id}
            onClick={(e) => handleActivityDelete(e, activity.id)}
            floated="right"
            content="Delete"
            color="red"
          />
          <Label basic content={activity.category} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
