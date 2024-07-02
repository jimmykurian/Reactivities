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

[src/app/features/activities/dashboard/ActivityList.tsx:20](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L20)

***

### deleteActivity()

> **deleteActivity**: (`id`) => `void`

Function to delete an activity by ID.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[src/app/features/activities/dashboard/ActivityList.tsx:21](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L21)

***

### submitting?

> `optional` **submitting**: `boolean`

Boolean indicating whether a delete operation is in progress.

#### Source

[src/app/features/activities/dashboard/ActivityList.tsx:22](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L22)
