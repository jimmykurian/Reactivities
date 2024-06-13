[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/form/ActivityForm](../README.md) / default

# Function: default()

> **default**(`props`): `JSX.Element`

A functional component that renders a form for activity details.

## Parameters

• **props**: `Props`

The props object containing the activity and the closeForm function.

## Returns

`JSX.Element`

The JSX element representing the activity form.

## Component

## Remarks

This component uses the Semantic UI React library to create a form layout
for collecting activity details such as title, description, category, date, city, and venue.
It includes input fields and buttons for submitting or canceling the form.

## Example

Here is an example of how to use the ActivityForm component:
```
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

[app/features/activities/form/ActivityForm.tsx:51](https://github.com/jimmykurian/Reactivities/blob/d382f1c721a2ea58fd894b7b4be5c6512186a40a/client-app/src/app/features/activities/form/ActivityForm.tsx#L51)
