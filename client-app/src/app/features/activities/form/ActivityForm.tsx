/**
 * @file ActivityForm.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityForm component.
 */

import { Button, Form, Segment } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';
import { Activity } from '../../../models/activity';
import LoadingComponent from '../../../layout/LoadingComponent';
import { v4 as uuid } from 'uuid';

/**
 * @component ActivityForm
 * @description A functional component that renders a form for activity details.
 *
 * @returns {JSX.Element} The JSX element representing the activity form.
 *
 * @remarks
 * This component uses the Semantic UI React library to create a form layout
 * for collecting activity details such as title, description, category, date, city, and venue.
 * It includes input fields and buttons for submitting or canceling the form.
 * The form state is managed using the `useState` hook, and the `handleInputChange` function updates the form state.
 * The `handleSubmit` function is used to create or edit the activity when the form is submitted.
 * The component accesses the `activityStore` from the MobX store context to get the selected activity, createActivity, updateActivity, and loading functions.
 * The `loadActivity` function is used to load the activity details when the component is mounted.
 * The `LoadingComponent` is displayed while the activity details are being loaded.
 * The `useNavigate` hook from `react-router-dom` is used to navigate to the activity details page upon form submission.
 * The `uuid` library is used to generate a unique ID for new activities.
 *
 * @example
 * Here is an example of how to use the ActivityForm component:
 * ```tsx
 * import React from 'react';
 * import { BrowserRouter as Router, Route } from 'react-router-dom';
 * import { StoreProvider } from './stores/store';
 * import ActivityForm from './features/activities/form/ActivityForm';
 *
 * const App = () => (
 *   <StoreProvider>
 *     <Router>
 *       <Route path="/manage/:id?" component={ActivityForm} />
 *     </Router>
 *   </StoreProvider>
 * );
 *
 * export default App;
 * ```
 */
export default observer(function ActivityForm(): JSX.Element {
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();
  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity>({
    id: '',
    title: '',
    date: '',
    description: '',
    category: '',
    city: '',
    venue: '',
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  /**
   * @function handleSubmit
   * @description Handles form submission. Calls the create or update function based on the activity ID.
   */
  function handleSubmit(): void {
    if (!activity.id) {
      activity.id = uuid();
      createActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`),
      );
    } else {
      updateActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`),
      );
    }
  }

  /**
   * @function handleInputChange
   * @description Handles input changes in the form fields and updates the state.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - The event triggered by changing the form input fields.
   */
  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

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
        <Button floated="right" type="button" content="Cancel" />
      </Form>
    </Segment>
  );
});
