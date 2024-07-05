/**
 * @file ActivityForm.tsx
 * @author Jimmy Kurian
 */

import { Button, Form, Segment } from 'semantic-ui-react';
import { useState } from 'react';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

/**
 * @component ActivityForm
 * @description A functional component that renders a form for activity details.
 * @returns {JSX.Element} The JSX element representing the activity form.
 * @remarks
 * This component uses the Semantic UI React library to create a form layout
 * for collecting activity details such as title, description, category, date, city, and venue.
 * It includes input fields and buttons for submitting or canceling the form.
 * The form state is managed using the `useState` hook, and the `handleInputChange` function updates the form state.
 * The `handleSubmit` function is used to create or edit the activity when the form is submitted.
 * The component accesses the `activityStore` from the MobX store context to get the selected activity, closeForm, createActivity, and updateActivity functions.
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
 * <ActivityForm />
 * ```
 */
export default observer(function ActivityForm(): JSX.Element {
  const { activityStore } = useStore();
  const {
    selectedActivity,
    closeForm,
    createActivity,
    updateActivity,
    loading,
  } = activityStore;

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

  /**
   * @function
   * @description Handles form submission.
   */
  function handleSubmit(): void {
    activity.id ? updateActivity(activity) : createActivity(activity);
  }

  /**
   * @function
   * @description Handles input changes in the form fields.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - The event triggered by changing the form input fields.
   */
  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
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
          loading={loading}
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
});
