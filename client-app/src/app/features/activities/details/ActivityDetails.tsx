/**
 * @file ActivityDetails.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityDetails component.
 */

import { Button, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../stores/store';
import LoadingComponent from '../../../layout/LoadingComponent';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * @component ActivityDetails
 * @description A functional component that displays the details of an activity.
 *
 * @returns {JSX.Element} The JSX element representing the activity details.
 *
 * @remarks
 * This component uses the Semantic UI React library to create a card layout for displaying activity details.
 * It includes an image, title, date, description, and buttons for editing or canceling the activity.
 * The `loadActivity` function is called to fetch the activity details based on the ID from the URL parameters.
 * The component accesses the `activityStore` from the MobX store context to get the selected activity and relevant functions.
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
 * <ActivityDetails />
 * ```
 */
export default observer(function ActivityDetails(): JSX.Element {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <LoadingComponent />;

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
          <Button basic color="grey" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
});
