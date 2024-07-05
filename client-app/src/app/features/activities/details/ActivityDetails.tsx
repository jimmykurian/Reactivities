/**
 * @file ActivityDetails.tsx
 * @author Jimmy Kurian
 */

import { Button, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../stores/store';
import LoadingComponent from '../../../layout/LoadingComponent';

/**
 * @component ActivityDetails
 * @description A functional component that displays the details of an activity.
 * @returns {JSX.Element} The JSX element representing the activity details.
 * @remarks
 * This component uses the Semantic UI React library to create a card layout for displaying activity details.
 * It includes an image, title, date, description, and buttons for editing or canceling the activity.
 * The `cancelSelectedActivity` function is called when the "Cancel" button is clicked.
 * The `openForm` function is called with the activity ID when the "Edit" button is clicked.
 * The component accesses the `activityStore` from the MobX store context to get the selected activity and relevant functions.
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
 * <ActivityDetails
 *   activity={activity}
 *   cancelSelectedActivity={() => console.log('Cancel clicked')}
 *   openForm={(id) => console.log(`Edit clicked for activity with id ${id}`)}
 * />
 * ```
 */
export default function ActivityDetails(): JSX.Element {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;

  if (!activity) return <LoadingComponent />;

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
          <Button
            onClick={() => openForm(activity.id)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={cancelSelectedActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
