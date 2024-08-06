[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/details/ActivityDetailedHeader](../README.md) / default

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

The rendered ActivityDetailedHeader component.

## Component

ActivityDetailedHeader

## Description

The ActivityDetailedHeader component displays the header section of an activity's details, including the activity image, title, date, and host information.

## Remarks

This component uses Semantic UI React components to create a visually appealing header for the activity details page. It includes an image with a darkened filter, the activity title, date, and host information. It also provides buttons for joining, canceling attendance, and managing the event.

## Example

Here is an example of how to use the ActivityDetailedHeader component:
```tsx
import React from 'react';
import ActivityDetailedHeader from './features/activities/details/ActivityDetailedHeader';
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
    <ActivityDetailedHeader activity={activity} />
  </div>
);

export default App;
```

## Source

[src/app/features/activities/details/ActivityDetailedHeader.tsx:81](https://github.com/jimmykurian/Reactivities/blob/53b13a08b38b7d13db7685da19b0f30adc1de6b5/client-app/src/app/features/activities/details/ActivityDetailedHeader.tsx#L81)
