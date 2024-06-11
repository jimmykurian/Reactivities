[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/details/ActivityDetails](../README.md) / default

# Function: default()

> **default**(`props`): `JSX.Element`

A functional component that displays the details of an activity.

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The props object containing the activity.

## Returns

`JSX.Element`

The JSX element representing the activity details.

## Remarks

This component uses the Semantic UI React library to create a card layout for displaying activity details.
It includes an image, title, date, description, and buttons for editing or cancelling the activity.

## Example

Here is an example of how to use the ActivityDetails component:
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

<ActivityDetails activity={activity} />
```

## Source

[app/features/activities/details/ActivityDetails.tsx:48](https://github.com/jimmykurian/Reactivities/blob/712c332819aee0d175bbdc912703a26a53d9ae5f/client-app/src/app/features/activities/details/ActivityDetails.tsx#L48)
