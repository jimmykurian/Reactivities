[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityList](../README.md) / default

# Function: default()

> **default**(`props`): `Element`

ActivityList component.

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The properties passed to the component.

## Returns

`Element`

The rendered ActivityList component.

## Component

## Remarks

This component maps over an array of activities and displays each one with its details using Semantic UI components.
Each activity includes a title, date, description, city, venue, and category, along with a "View" button.

## Example

```tsx
const activities = [
  { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
  { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
];

<ActivityList activities={activities} />
```

## Source

[app/features/activities/dashboard/ActivityList.tsx:40](https://github.com/jimmykurian/Reactivities/blob/712c332819aee0d175bbdc912703a26a53d9ae5f/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L40)
