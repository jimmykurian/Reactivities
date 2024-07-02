[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/form/ActivityForm](../README.md) / default

# Function: default()

> **default**(`props`): `JSX.Element`

A functional component that renders a form for activity details.

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The props object containing the createOrEdit function and the submitting state.

## Returns

`JSX.Element`

The JSX element representing the activity form.

## Component

## Remarks

This component uses the Semantic UI React library to create a form layout
for collecting activity details such as title, description, category, date, city, and venue.
It includes input fields and buttons for submitting or canceling the form.
The form state is managed using the `useState` hook, and the `handleInputChange` function updates the form state.
The `handleSubmit` function is used to create or edit the activity when the form is submitted.
The component accesses the `activityStore` from the MobX store context to get the selected activity and closeForm function.

## Example

Here is an example of how to use the ActivityForm component:
```tsx
const activity = {
  id: '1',
  title: 'Morning Run',
  date: '2024-06-12',
  description: 'A quick morning run around the park.',
  category: 'exercise',
  city: 'New York',
  venue: 'Central Park'
};

<ActivityForm
  createOrEdit={(activity) => console.log(activity)}
  submitting={false}
/>
```

## Source

[src/app/features/activities/form/ActivityForm.tsx:57](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/features/activities/form/ActivityForm.tsx#L57)
