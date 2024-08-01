[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityListItem](../README.md) / default

# Function: default()

> **default**(`props`): `JSX.Element`

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The props object containing the activity data.

## Returns

`JSX.Element`

The JSX element representing an individual activity item.

## Component

ActivityListItem

## Description

A functional component that renders an individual activity item.

## Remarks

This component uses the Semantic UI React library to create a styled item layout
for displaying individual activity details such as title, date, description, city, and venue.
It includes buttons for viewing and deleting the activity. The deletion process is handled
by the `handleActivityDelete` function which interacts with the MobX store's deleteActivity function.

## Example

Here is an example of how to use the ActivityListItem component:
```tsx
import React from 'react';
import { Activity } from '../../../models/activity';
import ActivityListItem from './ActivityListItem';

const activity: Activity = {
  id: '1',
  title: 'Morning Run',
  date: '2024-06-12',
  description: 'A quick morning run around the park.',
  category: 'exercise',
  city: 'New York',
  venue: 'Central Park'
};

<ActivityListItem activity={activity} />
```

## Source

[src/app/features/activities/dashboard/ActivityListItem.tsx:55](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/features/activities/dashboard/ActivityListItem.tsx#L55)
