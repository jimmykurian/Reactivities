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

[app/features/activities/dashboard/ActivityList.tsx:20](https://github.com/jimmykurian/Reactivities/blob/5b5ed521e5b39ce1e9f25269c451ae4d7d2b1c5a/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L20)

***

### deleteActivity()

> **deleteActivity**: (`id`) => `void`

Function to delete an activity by ID.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[app/features/activities/dashboard/ActivityList.tsx:22](https://github.com/jimmykurian/Reactivities/blob/5b5ed521e5b39ce1e9f25269c451ae4d7d2b1c5a/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L22)

***

### selectActivity()

> **selectActivity**: (`id`) => `void`

Function to select an activity by ID.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[app/features/activities/dashboard/ActivityList.tsx:21](https://github.com/jimmykurian/Reactivities/blob/5b5ed521e5b39ce1e9f25269c451ae4d7d2b1c5a/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L21)

***

### submitting?

> `optional` **submitting**: `boolean`

Boolean indicating whether a delete operation is in progress.

#### Source

[app/features/activities/dashboard/ActivityList.tsx:23](https://github.com/jimmykurian/Reactivities/blob/5b5ed521e5b39ce1e9f25269c451ae4d7d2b1c5a/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L23)
