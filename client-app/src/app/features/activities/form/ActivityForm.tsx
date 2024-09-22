/**
 * @file ActivityForm.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityForm component, which renders a form for activity details using Formik for form management.
 */

import { Button, Segment } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import { Activity } from '../../../models/activity';
import LoadingComponent from '../../../layout/LoadingComponent';
import { Formik, Form, Field } from 'formik';

/**
 * @component ActivityForm
 * @description A functional component that renders a form for activity details using Formik for form management.
 *
 * @returns {JSX.Element} The JSX element representing the activity form.
 *
 * @remarks
 * This component utilizes the Semantic UI React library and Formik to create a form layout
 * for collecting activity details such as title, description, category, date, city, and venue.
 * It includes input fields and buttons for submitting or canceling the form.
 *
 * - **Form State Management:** The form state is managed using Formik, which simplifies handling form data and validation.
 * - **Formik Integration:** The `Formik` component initializes the form with `activity` data and handles form submission.
 * - **Activity Loading:** The component accesses the `activityStore` from the MobX store context to load activity details and manage loading states.
 * - **Side Effects:** The `useEffect` hook is used to load activity details when the component is mounted, especially if an activity ID is provided via URL parameters using `useParams`.
 * - **Loading Indicator:** The `LoadingComponent` is displayed while activity details are being loaded.
 * - **Routing:** The `Link` component from `react-router-dom` is used for navigation, allowing users to cancel and return to the activities list.
 * - **MobX Integration:** The `observer` higher-order component from `mobx-react-lite` is used to make the component reactive to MobX state changes.
 * - **Form Submission:** Currently, the `onSubmit` function of Formik logs the form values to the console for debugging purposes. This will be updated to handle creating or updating activities by interacting with the `activityStore`.
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
  const { loading, loadActivity, loadingInitial } = activityStore;
  const { id } = useParams();

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

  // /**
  //  * @function handleSubmit
  //  * @description Handles form submission. Calls the create or update function based on the activity ID.
  //  */
  // function handleSubmit(): void {
  //   if (!activity.id) {
  //     activity.id = uuid();
  //     createActivity(activity).then(() =>
  //       navigate(`/activities/${activity.id}`),
  //     );
  //   } else {
  //     updateActivity(activity).then(() =>
  //       navigate(`/activities/${activity.id}`),
  //     );
  //   }
  // }

  // /**
  //  * @function handleChange
  //  * @description Handles input changes in the form fields and updates the state.
  //  * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - The event triggered by changing the form input fields.
  //  */
  // function handleChange(
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ): void {
  //   const { name, value } = event.target;
  //   setActivity({ ...activity, [name]: value });
  // }

  if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

  return (
    <Segment clearing>
      <Formik
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
            <Field placeholder="Title" name="title" />
            <Field placeholder="Description" name="description" />
            <Field placeholder="Category" name="category" />
            <Field placeholder="Date" type="date" name="date" />
            <Field placeholder="City" name="city" />
            <Field placeholder="Venue" name="venue" />
            <Button
              loading={loading}
              floated="right"
              positive
              type="submit"
              content="Submit"
            />
            <Button
              as={Link}
              to="/activities"
              floated="right"
              type="button"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
});
