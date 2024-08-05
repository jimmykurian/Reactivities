[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/details/ActivityDetails](../README.md) / default

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

The JSX element representing the activity details.

## Component

ActivityDetails

## Description

A functional component that displays the details of an activity.

## Remarks

This component uses the Semantic UI React library to create a layout for displaying detailed information about an activity.
It includes a header, detailed information, a chat section, and a sidebar.
The `loadActivity` function is called to fetch the activity details based on the ID from the URL parameters.
The component accesses the `activityStore` from the MobX store context to get the selected activity and relevant functions.
The `LoadingComponent` is displayed while the activity details are being loaded.

## Example

Here is an example of how to use the ActivityDetails component:
```tsx
import React from 'react';
import ActivityDetails from './features/activities/details/ActivityDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreProvider } from './stores/store';

const App = () => (
  <StoreProvider>
    <Router>
      <Route path="/activities/:id" component={ActivityDetails} />
    </Router>
  </StoreProvider>
);

export default App;
```

## Source

[src/app/features/activities/details/ActivityDetails.tsx:50](https://github.com/jimmykurian/Reactivities/blob/c193146f41fb278d3aa689957dee7f5206c157e3/client-app/src/app/features/activities/details/ActivityDetails.tsx#L50)
