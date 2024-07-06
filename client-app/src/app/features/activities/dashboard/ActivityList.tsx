/**
 * @file ActivityList.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityList component.
 */

import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { SyntheticEvent, useState } from 'react';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

/**
 * @component ActivityList
 * @description The ActivityList component displays a list of activities with options to view and delete each activity.
 *
 * @returns {JSX.Element} The rendered ActivityList component.
 *
 * @remarks
 * This component maps over an array of activities and displays each one with its details using Semantic UI components.
 * Each activity includes a title, date, description, city, venue, and category, along with "View" and "Delete" buttons.
 * The `activityStore.selectActivity` function is called when the "View" button is clicked, passing the activity's ID.
 * The `deleteActivity` function is called when the "Delete" button is clicked, passing the activity's ID.
 * The `loading` state is used to indicate whether a delete operation is in progress, which disables the delete button for the targeted activity.
 *
 * @example
 * ```tsx
 * const activities = [
 *   { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
 *   { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
 * ];
 *
 * const deleteActivity = (id: string) => console.log(`Delete activity with id ${id}`);
 *
 * <ActivityList />
 * ```
 */
export default observer(function ActivityList(): JSX.Element {
  const { activityStore } = useStore();
  const { activitiesByDate, deleteActivity, loading } = activityStore;
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
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map((activity) => (
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
                  onClick={() => activityStore.selectActivity(activity.id)}
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
        ))}
      </Item.Group>
    </Segment>
  );
});
