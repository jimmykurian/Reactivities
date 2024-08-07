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

The ActivityList component displays a list of activities grouped by date with options to view and delete each activity.

## Remarks

This component maps over an array of grouped activities and displays each one with its details using Semantic UI components.
Each group is rendered with a header displaying the date and the activities for that date.
The `ActivityListItem` component is used to render individual activity items.
The activities are sorted by date and retrieved from the MobX store.

## Example

Here is an example of how to use the ActivityList component:
```tsx
import React from 'react';
import { StoreProvider } from './stores/store';
import ActivityList from './features/activities/dashboard/ActivityList';

const App = () => (
  <StoreProvider>
    <ActivityList />
  </StoreProvider>
);

export default App;
```

## Source

[src/app/features/activities/dashboard/ActivityList.tsx:41](https://github.com/jimmykurian/Reactivities/blob/53b13a08b38b7d13db7685da19b0f30adc1de6b5/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L41)
