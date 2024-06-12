/**
 * @author Jimmy Kurian
 * @name ActivityDetails
 */

import { Button, Card, Image } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';

/**
 * Props interface for the ActivityDetails component.
 *
 * @interface Props
 * @property {Activity} activity - The activity object containing details of the activity.
 * @property {() => void} cancelSelectActivity - Function to cancel the selection of the activity.
 */
export interface Props {
  /**
   * The activity object containing details of the activity.
   */
  activity: Activity;
  cancelSelectActivity: () => void;
}

/**
 * A functional component that displays the details of an activity.
 *
 * @param {Props} props - The props object containing the activity.
 * @returns {JSX.Element} The JSX element representing the activity details.
 *
 * @remarks
 * This component uses the Semantic UI React library to create a card layout for displaying activity details.
 * It includes an image, title, date, description, and buttons for editing or cancelling the activity.
 * The `cancelSelectActivity` function is called when the "Cancel" button is clicked.
 *
 * @example
 * Here is an example of how to use the ActivityDetails component:
 * ```tsx
 * const activity = {
 *   id: '1',
 *   title: 'Morning Run',
 *   date: '2024-06-12',
 *   description: 'A quick morning run around the park.',
 *   category: 'exercise',
 *   city: 'New York',
 *   venue: 'Central Park'
 * };
 *
 * <ActivityDetails activity={activity} cancelSelectActivity={() => console.log('Cancel clicked')} />
 * ```
 */
export default function ActivityDetails({
  activity,
  cancelSelectActivity,
}: Props): JSX.Element {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>{activity.date}</Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button basic color="blue" content="Edit" />
          <Button
            onClick={cancelSelectActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
