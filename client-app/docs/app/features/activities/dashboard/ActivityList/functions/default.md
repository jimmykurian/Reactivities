[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityList](../README.md) / default

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

The rendered ActivityList component.

## Component

ActivityList

## Description

The ActivityList component displays a list of activities with options to view and delete each activity.

## Remarks

This component maps over an array of activities and displays each one with its details using Semantic UI components.
Each activity includes a title, date, description, city, venue, and category, along with "View" and "Delete" buttons.
The `activityStore.selectActivity` function is called when the "View" button is clicked, passing the activity's ID.
The `deleteActivity` function is called when the "Delete" button is clicked, passing the activity's ID.
The `loading` state is used to indicate whether a delete operation is in progress, which disables the delete button for the targeted activity.

## Example

```tsx
const activities = [
  { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
  { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
];

const deleteActivity = (id: string) => console.log(`Delete activity with id ${id}`);

<ActivityList />
```

## Source

[src/app/features/activities/dashboard/ActivityList.tsx:37](https://github.com/jimmykurian/Reactivities/blob/ab68919949da6f10746423fc739292afd2dfa6f7/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L37)
