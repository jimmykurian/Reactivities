[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityDashboard](../README.md) / Props

# Interface: Props

Props interface for the ActivityDashboard component.

 Props

## Properties

### activities

> **activities**: [`Activity`](../../../../../models/activity/interfaces/Activity.md)[]

Array of activities to be displayed.

#### Source

[app/features/activities/dashboard/ActivityDashboard.tsx:22](https://github.com/jimmykurian/Reactivities/blob/a434653d2775e48b1e9101040f63634644bb62b7/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L22)

***

### cancelSelectActivity()

> **cancelSelectActivity**: () => `void`

Function to cancel the selection of an activity.

#### Returns

`void`

#### Source

[app/features/activities/dashboard/ActivityDashboard.tsx:25](https://github.com/jimmykurian/Reactivities/blob/a434653d2775e48b1e9101040f63634644bb62b7/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L25)

***

### selectActivity()

> **selectActivity**: (`id`) => `void`

Function to select an activity by ID.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[app/features/activities/dashboard/ActivityDashboard.tsx:24](https://github.com/jimmykurian/Reactivities/blob/a434653d2775e48b1e9101040f63634644bb62b7/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L24)

***

### selectedActivity

> **selectedActivity**: `undefined` \| [`Activity`](../../../../../models/activity/interfaces/Activity.md)

The currently selected activity.

#### Source

[app/features/activities/dashboard/ActivityDashboard.tsx:23](https://github.com/jimmykurian/Reactivities/blob/a434653d2775e48b1e9101040f63634644bb62b7/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L23)
