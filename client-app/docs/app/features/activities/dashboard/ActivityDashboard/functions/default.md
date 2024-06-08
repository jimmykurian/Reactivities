[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityDashboard](../README.md) / default

# Function: default()

> **default**(`props`): `Element`

ActivityDashboard component.

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The properties passed to the component.

## Returns

`Element`

The rendered ActivityDashboard component.

## Component

## Remarks

This component serves as the dashboard to display a list of activities.
It uses the `Grid.Column` component from Semantic UI to structure the layout
and the `List` component to contain the `ActivityList` component.

## Example

```tsx
const activities = [
  { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
  { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
];

<ActivityDashboard activities={activities} />
```

## Source

[app/features/activities/dashboard/ActivityDashboard.tsx:42](https://github.com/jimmykurian/Reactivities/blob/4ab199bddea0052df810fe9ea0493ff906b43566/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L42)
