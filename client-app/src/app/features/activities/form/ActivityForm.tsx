/**
 * @author Jimmy Kurian
 * @name ActivityForm
 */

import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';

/**
 * Props interface for the ActivityForm component.
 *
 * @interface Props
 * @property {Activity | undefined} activity - The activity object containing details of the activity to be edited, or undefined for a new activity.
 * @property {() => void} closeForm - Function to close the form.
 */
interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
}

/**
 * A functional component that renders a form for activity details.
 *
 * @component
 * @param {Props} props - The props object containing the activity and the closeForm function.
 * @returns {JSX.Element} The JSX element representing the activity form.
 *
 * @remarks
 * This component uses the Semantic UI React library to create a form layout
 * for collecting activity details such as title, description, category, date, city, and venue.
 * It includes input fields and buttons for submitting or canceling the form.
 *
 * @example
 * Here is an example of how to use the ActivityForm component:
 * ```
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
 * <ActivityForm activity={activity} closeForm={() => console.log('Form closed')} />
 * ```
 */

//TODO: Will implement activity variable once the form is fully implemented
export default function ActivityForm({ closeForm }: Props): JSX.Element {
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" />
        <Form.TextArea placeholder="Description" />
        <Form.Input placeholder="Category" />
        <Form.Input placeholder="Date" />
        <Form.Input placeholder="City" />
        <Form.Input placeholder="Venue" />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={closeForm}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
