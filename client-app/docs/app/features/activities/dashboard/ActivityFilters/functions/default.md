[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityFilters](../README.md) / default

# Function: default()

> **default**(): `JSX.Element`

## Returns

`JSX.Element`

The rendered ActivityFilters component.

## Component

ActivityFilters

## Description

The ActivityFilters component renders a vertical menu with filtering options for activities and a calendar.

## Remarks

This component uses Semantic UI React components to create a vertical menu with options to filter activities by all activities, activities the user is going to, and activities the user is hosting. It also includes a calendar component for selecting dates.

## Example

Here is an example of how to use the ActivityFilters component:
```tsx
import React from 'react';
import ActivityFilters from './features/activities/dashboard/ActivityFilters';

const App = () => (
  <div>
    <ActivityFilters />
  </div>
);

export default App;
```

## Source

[src/app/features/activities/dashboard/ActivityFilters.tsx:34](https://github.com/jimmykurian/Reactivities/blob/5706c36bcf0d6b31b6711b289307934f1dd8355e/client-app/src/app/features/activities/dashboard/ActivityFilters.tsx#L34)
