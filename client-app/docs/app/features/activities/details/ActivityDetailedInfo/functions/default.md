[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/details/ActivityDetailedInfo](../README.md) / default

# Function: default()

> **default**(`props`, `deprecatedLegacyContext`?): `ReactNode`

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The properties object containing the activity to display.

• **deprecatedLegacyContext?**: `any`

**Deprecated**

**See**

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods)

## Returns

`ReactNode`

The rendered ActivityDetailedInfo component.

## Component

ActivityDetailedInfo

## Description

The ActivityDetailedInfo component displays detailed information about an activity.

## Remarks

This component uses Semantic UI React components to create a segmented layout displaying the description, date, and venue of the activity.
Each segment includes an icon and the corresponding information from the activity object.

## Example

Here is an example of how to use the ActivityDetailedInfo component:
```tsx
import React from 'react';
import ActivityDetailedInfo from './features/activities/details/ActivityDetailedInfo';
import { Activity } from '../../../models/activity';

const activity: Activity = {
  id: '1',
  title: 'Sample Activity',
  description: 'This is a sample activity description.',
  date: '2024-01-01',
  city: 'Sample City',
  venue: 'Sample Venue',
  category: 'Sample Category',
};

const App = () => (
  <div>
    <ActivityDetailedInfo activity={activity} />
  </div>
);

export default App;
```

## Source

[src/app/features/activities/details/ActivityDetailedInfo.tsx:59](https://github.com/jimmykurian/Reactivities/blob/5706c36bcf0d6b31b6711b289307934f1dd8355e/client-app/src/app/features/activities/details/ActivityDetailedInfo.tsx#L59)
