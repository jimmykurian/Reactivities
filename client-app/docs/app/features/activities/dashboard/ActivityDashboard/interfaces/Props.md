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

[app/features/activities/dashboard/ActivityDashboard.tsx:26](https://github.com/jimmykurian/Reactivities/blob/2eec73b290ba27687cc01099a29cb3dbf8f367be/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L26)

***

### cancelSelectActivity()

> **cancelSelectActivity**: () => `void`

Function to cancel the selection of an activity.

#### Returns

`void`

#### Source

[app/features/activities/dashboard/ActivityDashboard.tsx:29](https://github.com/jimmykurian/Reactivities/blob/2eec73b290ba27687cc01099a29cb3dbf8f367be/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L29)

***

### closeForm()

> **closeForm**: () => `void`

Function to close the form.

#### Returns

`void`

#### Source

[app/features/activities/dashboard/ActivityDashboard.tsx:32](https://github.com/jimmykurian/Reactivities/blob/2eec73b290ba27687cc01099a29cb3dbf8f367be/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L32)

***

### createOrEdit()

> **createOrEdit**: (`activity`) => `void`

Function to create or edit an activity.

#### Parameters

• **activity**: [`Activity`](../../../../../models/activity/interfaces/Activity.md)

#### Returns

`void`

#### Source

[app/features/activities/dashboard/ActivityDashboard.tsx:33](https://github.com/jimmykurian/Reactivities/blob/2eec73b290ba27687cc01099a29cb3dbf8f367be/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L33)

***

### editMode?

> `optional` **editMode**: `boolean`

Boolean indicating if the form is in edit mode.

#### Source

[app/features/activities/dashboard/ActivityDashboard.tsx:30](https://github.com/jimmykurian/Reactivities/blob/2eec73b290ba27687cc01099a29cb3dbf8f367be/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L30)

***

### openForm()

> **openForm**: (`id`?) => `void`

Function to open the form for editing or creating an activity.

#### Parameters

• **id?**: `string`

#### Returns

`void`

#### Source

[app/features/activities/dashboard/ActivityDashboard.tsx:31](https://github.com/jimmykurian/Reactivities/blob/2eec73b290ba27687cc01099a29cb3dbf8f367be/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L31)

***

### selectActivity()

> **selectActivity**: (`id`) => `void`

Function to select an activity by ID.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[app/features/activities/dashboard/ActivityDashboard.tsx:28](https://github.com/jimmykurian/Reactivities/blob/2eec73b290ba27687cc01099a29cb3dbf8f367be/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L28)

***

### selectedActivity

> **selectedActivity**: `undefined` \| [`Activity`](../../../../../models/activity/interfaces/Activity.md)

The currently selected activity.

#### Source

[app/features/activities/dashboard/ActivityDashboard.tsx:27](https://github.com/jimmykurian/Reactivities/blob/2eec73b290ba27687cc01099a29cb3dbf8f367be/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L27)
