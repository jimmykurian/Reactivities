[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityList](../README.md) / Props

# Interface: Props

Props interface for the ActivityList component.

 Props

## Properties

### activities

> **activities**: [`Activity`](../../../../../models/activity/interfaces/Activity.md)[]

Array of activities to be displayed.

#### Source

[src/app/features/activities/dashboard/ActivityList.tsx:20](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L20)

***

### deleteActivity()

> **deleteActivity**: (`id`) => `void`

Function to delete an activity by ID.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[src/app/features/activities/dashboard/ActivityList.tsx:21](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L21)

***

### submitting?

> `optional` **submitting**: `boolean`

Boolean indicating whether a delete operation is in progress.

#### Source

[src/app/features/activities/dashboard/ActivityList.tsx:22](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L22)
