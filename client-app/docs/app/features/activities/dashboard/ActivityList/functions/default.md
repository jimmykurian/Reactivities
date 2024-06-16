[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityList](../README.md) / default

# Function: default()

> **default**(`props`): `JSX.Element`

ActivityList component.

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The properties passed to the component.

## Returns

`JSX.Element`

The rendered ActivityList component.

## Component

## Remarks

This component maps over an array of activities and displays each one with its details using Semantic UI components.
Each activity includes a title, date, description, city, venue, and category, along with a "View" button.
The `selectActivity` function is called when the "View" button is clicked, passing the activity's ID.

## Example

```tsx
const activities = [
  { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
  { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
];

const selectActivity = (id: string) => console.log(id);

<ActivityList activities={activities} selectActivity={selectActivity} />
```

## Source

[app/features/activities/dashboard/ActivityList.tsx:45](https://github.com/jimmykurian/Reactivities/blob/2eec73b290ba27687cc01099a29cb3dbf8f367be/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L45)
