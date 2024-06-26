[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/form/ActivityForm](../README.md) / Props

# Interface: Props

Props interface for the ActivityForm component.

 Props

## Properties

### activity

> **activity**: `undefined` \| [`Activity`](../../../../../models/activity/interfaces/Activity.md)

The activity object containing details of the activity to be edited, or undefined for a new activity.

#### Source

[app/features/activities/form/ActivityForm.tsx:20](https://github.com/jimmykurian/Reactivities/blob/5b5ed521e5b39ce1e9f25269c451ae4d7d2b1c5a/client-app/src/app/features/activities/form/ActivityForm.tsx#L20)

***

### closeForm()

> **closeForm**: () => `void`

Function to close the form.

#### Returns

`void`

#### Source

[app/features/activities/form/ActivityForm.tsx:21](https://github.com/jimmykurian/Reactivities/blob/5b5ed521e5b39ce1e9f25269c451ae4d7d2b1c5a/client-app/src/app/features/activities/form/ActivityForm.tsx#L21)

***

### createOrEdit()

> **createOrEdit**: (`activity`) => `void`

Function to create or edit an activity.

#### Parameters

• **activity**: [`Activity`](../../../../../models/activity/interfaces/Activity.md)

#### Returns

`void`

#### Source

[app/features/activities/form/ActivityForm.tsx:22](https://github.com/jimmykurian/Reactivities/blob/5b5ed521e5b39ce1e9f25269c451ae4d7d2b1c5a/client-app/src/app/features/activities/form/ActivityForm.tsx#L22)

***

### submitting?

> `optional` **submitting**: `boolean`

Indicates whether the form submission is in progress.

#### Source

[app/features/activities/form/ActivityForm.tsx:23](https://github.com/jimmykurian/Reactivities/blob/5b5ed521e5b39ce1e9f25269c451ae4d7d2b1c5a/client-app/src/app/features/activities/form/ActivityForm.tsx#L23)
