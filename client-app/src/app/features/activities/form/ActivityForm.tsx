/**
 * @author Jimmy Kurian
 * @name ActivityForm
 */

import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';
import { useState } from 'react';

/**
 * Props interface for the ActivityForm component.
 *
 * @interface Props
 * @property {Activity | undefined} activity - The activity object containing details of the activity to be edited, or undefined for a new activity.
 * @property {() => void} closeForm - Function to close the form.
 * @property {(activity: Activity) => void} createOrEdit - Function to create or edit an activity.
 * @property {boolean} [submitting] - Indicates whether the form submission is in progress.
 */
export interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  submitting?: boolean;
}

/**
 * A functional component that renders a form for activity details.
 *
 * @component
 * @param {Props} props - The props object containing the selected activity, the closeForm function, and the createOrEdit function.
 * @returns {JSX.Element} The JSX element representing the activity form.
 *
 * @remarks
 * This component uses the Semantic UI React library to create a form layout
 * for collecting activity details such as title, description, category, date, city, and venue.
 * It includes input fields and buttons for submitting or canceling the form.
 * The form state is managed using the `useState` hook, and the `handleInputChange` function updates the form state.
 * The `handleSubmit` function is used to create or edit the activity when the form is submitted.
 *
 * @example
 * Here is an example of how to use the ActivityForm component:
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
 * <ActivityForm
 *   activity={activity}
 *   closeForm={() => console.log('Form closed')}
 *   createOrEdit={(activity) => console.log(activity)}
 *   submitting={false}
 * />
 * ```
 */
export default function ActivityForm({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
  submitting,
}: Props): JSX.Element {
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    date: '',
    description: '',
    category: '',
    city: '',
    venue: '',
  };

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    createOrEdit(activity);
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Date"
          type="date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="City"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <Button
          loading={submitting}
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
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
