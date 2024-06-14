[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/form/ActivityForm](../README.md) / default

# Function: default()

> **default**(`props`): `JSX.Element`

A functional component that renders a form for activity details.

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The props object containing the selected activity and the closeForm function.

## Returns

`JSX.Element`

The JSX element representing the activity form.

## Component

## Remarks

This component uses the Semantic UI React library to create a form layout
for collecting activity details such as title, description, category, date, city, and venue.
It includes input fields and buttons for submitting or canceling the form.
The form state is managed using the `useState` hook, and the `handleInputChange` function updates the form state.

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

<ActivityForm activity={activity} closeForm={() => console.log('Form closed')} />
```

## Source

[app/features/activities/form/ActivityForm.tsx:51](https://github.com/jimmykurian/Reactivities/blob/121f957c5dd0f42591c8ed9ce52818607ca097fb/client-app/src/app/features/activities/form/ActivityForm.tsx#L51)
