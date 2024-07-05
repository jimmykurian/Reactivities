[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/stores/activityStore](../README.md) / default

# Class: default

ActivityStore

## Classdesc

This class represents the MobX store for managing activity-related state.
It initializes the observables and configures MobX for state management.

## Example

```tsx
import ActivityStore from './ActivityStore';

const activityStore = new ActivityStore();
activityStore.loadActivities();
```

## Constructors

### new default()

> **new default**(): [`default`](default.md)

#### Returns

[`default`](default.md)

#### Description

Creates an instance of ActivityStore.

#### Remarks

Initializes the observables using MobX's makeAutoObservable.

#### Source

[src/app/stores/activityStore.ts:44](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L44)

## Properties

### activities

> **activities**: [`Activity`](../../../models/activity/interfaces/Activity.md)[] = `[]`

#### Source

[src/app/stores/activityStore.ts:25](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L25)

***

### editMode

> **editMode**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:31](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L31)

***

### loading

> **loading**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:34](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L34)

***

### loadingInitial

> **loadingInitial**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:37](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L37)

***

### selectedActivity

> **selectedActivity**: `undefined` \| [`Activity`](../../../models/activity/interfaces/Activity.md) = `undefined`

#### Source

[src/app/stores/activityStore.ts:28](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L28)

## Methods

### cancelSelectedActivity()

> **cancelSelectedActivity**(): `void`

#### Returns

`void`

#### Function

#### Description

Cancels the selection of the currently selected activity.

#### Source

[src/app/stores/activityStore.ts:95](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L95)

***

### closeForm()

> **closeForm**(): `void`

#### Returns

`void`

#### Function

#### Description

Closes the form for creating or editing an activity.

#### Source

[src/app/stores/activityStore.ts:113](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L113)

***

### createActivity()

> **createActivity**(`activity`): `Promise`\<`void`\>

#### Parameters

• **activity**: [`Activity`](../../../models/activity/interfaces/Activity.md)

The activity to create.

#### Returns

`Promise`\<`void`\>

#### Async

#### Function

#### Description

Creates a new activity.

#### Source

[src/app/stores/activityStore.ts:124](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L124)

***

### deleteActivity()

> **deleteActivity**(`id`): `Promise`\<`void`\>

#### Parameters

• **id**: `string`

The ID of the activity to delete.

#### Returns

`Promise`\<`void`\>

#### Async

#### Function

#### Description

Deletes an activity by its ID.

#### Source

[src/app/stores/activityStore.ts:178](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L178)

***

### loadActivities()

> **loadActivities**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Async

#### Function

#### Description

Loads activities from the API and sets the activities state.

#### Source

[src/app/stores/activityStore.ts:54](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L54)

***

### openForm()

> **openForm**(`id`?): `void`

#### Parameters

• **id?**: `string`

The ID of the activity to edit, if any.

#### Returns

`void`

#### Function

#### Description

Opens the form for creating or editing an activity.

#### Source

[src/app/stores/activityStore.ts:104](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L104)

***

### selectActivity()

> **selectActivity**(`id`): `void`

#### Parameters

• **id**: `string`

The ID of the activity to select.

#### Returns

`void`

#### Function

#### Description

Selects an activity by its ID.

#### Source

[src/app/stores/activityStore.ts:87](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L87)

***

### setLoadingInitial()

> **setLoadingInitial**(`state`): `void`

.

#### Parameters

• **state**: `boolean`

The loading state to set.

#### Returns

`void`

#### Function

#### Description

Sets the loading initial state

#### Source

[src/app/stores/activityStore.ts:78](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L78)

***

### updateActivity()

> **updateActivity**(`activity`): `Promise`\<`void`\>

#### Parameters

• **activity**: [`Activity`](../../../models/activity/interfaces/Activity.md)

The activity to update.

#### Returns

`Promise`\<`void`\>

#### Async

#### Function

#### Description

Updates an existing activity.

#### Source

[src/app/stores/activityStore.ts:150](https://github.com/jimmykurian/Reactivities/blob/389d69564b44e3bb01195bf2a2a519fe0be35b7c/client-app/src/app/stores/activityStore.ts#L150)
