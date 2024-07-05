[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/details/ActivityDetails](../README.md) / default

# Function: default()

> **default**(): `JSX.Element`

## Returns

`JSX.Element`

The JSX element representing the activity details.

## Component

ActivityDetails

## Description

A functional component that displays the details of an activity.

## Remarks

This component uses the Semantic UI React library to create a card layout for displaying activity details.
It includes an image, title, date, description, and buttons for editing or canceling the activity.
The `cancelSelectedActivity` function is called when the "Cancel" button is clicked.
The `openForm` function is called with the activity ID when the "Edit" button is clicked.
The component accesses the `activityStore` from the MobX store context to get the selected activity and relevant functions.

## Example

Here is an example of how to use the ActivityDetails component:
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

<ActivityDetails
  activity={activity}
  cancelSelectedActivity={() => console.log('Cancel clicked')}
  openForm={(id) => console.log(`Edit clicked for activity with id ${id}`)}
/>
```

## Source

[src/app/features/activities/details/ActivityDetails.tsx:40](https://github.com/jimmykurian/Reactivities/blob/a12e79dbb60696a9948b8b89e913d44a26f8e7d7/client-app/src/app/features/activities/details/ActivityDetails.tsx#L40)
