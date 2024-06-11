/**
 * @author Jimmy Kurian
 * @name ActivityForm
 */

import { Button, Form, Segment } from 'semantic-ui-react';

/**
 * A functional component that renders a form for activity details.
 *
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
 * <ActivityForm />
 * ```
 */
export default function ActivityForm(): JSX.Element {
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
        <Button floated="right" type="button" content="Cancel" />
      </Form>
    </Segment>
  );
}
