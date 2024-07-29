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
The `ActivityListItem` component is used to render individual activity items.
The activities are sorted by date and retrieved from the MobX store.

## Example

Here is an example of how to use the ActivityList component:
```tsx
import React from 'react';
import { StoreProvider } from './stores/store';
import ActivityList from './features/activities/dashboard/ActivityList';

const activities = [
  { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
  { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
];

const App = () => (
  <StoreProvider>
    <ActivityList />
  </StoreProvider>
);

export default App;
```

## Source

[src/app/features/activities/dashboard/ActivityList.tsx:45](https://github.com/jimmykurian/Reactivities/blob/5670213c338d2af4595c1ce87506b162bb3099b4/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L45)
