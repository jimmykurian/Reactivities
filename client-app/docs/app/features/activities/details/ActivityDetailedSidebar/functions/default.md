[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/details/ActivityDetailedSidebar](../README.md) / default

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

The rendered ActivityDetailedSidebar component.

## Component

ActivityDetailedSidebar

## Description

The ActivityDetailedSidebar component displays a sidebar with a list of people going to the activity.

## Remarks

This component uses Semantic UI React components to create a styled sidebar. It includes a segment header displaying the number of people going to the activity and a list of attendees. Each attendee is shown with an image, name, and an optional "Following" label. The host is marked with an orange ribbon.

## Example

Here is an example of how to use the ActivityDetailedSidebar component:
```tsx
import React from 'react';
import ActivityDetailedSidebar from './features/activities/details/ActivityDetailedSidebar';

const App = () => (
  <div>
    <ActivityDetailedSidebar />
  </div>
);

export default App;
```

## Source

[src/app/features/activities/details/ActivityDetailedSidebar.tsx:35](https://github.com/jimmykurian/Reactivities/blob/af72bfec8c51b7602f492bc9e60a71a5f447d0af/client-app/src/app/features/activities/details/ActivityDetailedSidebar.tsx#L35)
