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
It includes buttons for viewing the activity. The component is designed to integrate with
the MobX store for managing activity data and state.

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

[src/app/features/activities/dashboard/ActivityListItem.tsx:53](https://github.com/jimmykurian/Reactivities/blob/5706c36bcf0d6b31b6711b289307934f1dd8355e/client-app/src/app/features/activities/dashboard/ActivityListItem.tsx#L53)
