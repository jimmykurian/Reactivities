/**
 * @author Jimmy Kurian
 * @name ActivityList
 */

import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';
import { SyntheticEvent, useState } from 'react';

/**
 * Props interface for the ActivityList component.
 *
 * @interface Props
 * @property {Activity[]} activities - Array of activities to be displayed.
 * @property {(id: string) => void} selectActivity - Function to select an activity by ID.
 * @property {(id: string) => void} deleteActivity - Function to delete an activity by ID.
 */
export interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting?: boolean;
}

/**
 * ActivityList component.
 *
 * @component
 * @param {Props} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered ActivityList component.
 *
 * @remarks
 * This component maps over an array of activities and displays each one with its details using Semantic UI components.
 * Each activity includes a title, date, description, city, venue, and category, along with "View" and "Delete" buttons.
 * The `selectActivity` function is called when the "View" button is clicked, passing the activity's ID.
 * The `deleteActivity` function is called when the "Delete" button is clicked, passing the activity's ID.
 *
 * @example
 * ```tsx
 * const activities = [
 *   { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
 *   { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
 * ];
 *
 * const selectActivity = (id: string) => console.log(id);
 * const deleteActivity = (id: string) => console.log(`Delete activity with id ${id}`);
 *
 * <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />
 * ```
 */
export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
}: Props): JSX.Element {
  const [target, setTarget] = useState('');

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
        {activities.map((activity) => (
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
                  onClick={() => selectActivity(activity.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  name={activity.id}
                  loading={submitting && target === activity.id}
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
}
