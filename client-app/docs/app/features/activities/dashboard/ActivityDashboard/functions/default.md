[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityDashboard](../README.md) / default

# Function: default()

> **default**(`props`, `deprecatedLegacyContext`?): `ReactNode`

## Parameters

• **props**: `object`

• **deprecatedLegacyContext?**: `any`

**Deprecated**

**See**

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods)

## Returns

`ReactNode`

The rendered ActivityDashboard component.

## Component

ActivityDashboard

## Description

The ActivityDashboard component displays a list of activities and their details or a form for editing/creating activities.

## Remarks

This component serves as the main dashboard for managing activities. It conditionally renders the `ActivityList`, `ActivityDetails`,
and `ActivityForm` components based on the state from the MobX store.

## Example

```tsx
const activities = [
  { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
  { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
];

const deleteActivity = (id: string) => console.log(`Delete activity with id ${id}`);

<ActivityDashboard />
```

## Source

[src/app/features/activities/dashboard/ActivityDashboard.tsx:32](https://github.com/jimmykurian/Reactivities/blob/a12e79dbb60696a9948b8b89e913d44a26f8e7d7/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L32)
