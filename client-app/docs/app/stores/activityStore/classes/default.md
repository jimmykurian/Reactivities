[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/stores/activityStore](../README.md) / default

# Class: default

## Author

Jimmy Kurian
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

Creates an instance of ActivityStore.
Initializes the observables using MobX's makeAutoObservable.

#### Returns

[`default`](default.md)

#### Source

[src/app/stores/activityStore.ts:40](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L40)

## Properties

### activities

> **activities**: [`Activity`](../../../models/activity/interfaces/Activity.md)[] = `[]`

#### Source

[src/app/stores/activityStore.ts:22](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L22)

***

### editMode

> **editMode**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:28](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L28)

***

### loading

> **loading**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:31](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L31)

***

### loadingInitial

> **loadingInitial**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:34](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L34)

***

### selectedActivity

> **selectedActivity**: `undefined` \| [`Activity`](../../../models/activity/interfaces/Activity.md) = `undefined`

#### Source

[src/app/stores/activityStore.ts:25](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L25)

## Methods

### cancelSelectedActivity()

> **cancelSelectedActivity**(): `void`

Cancels the selection of the currently selected activity.

#### Returns

`void`

#### Function

#### Source

[src/app/stores/activityStore.ts:95](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L95)

***

### closeForm()

> **closeForm**(): `void`

Closes the form for creating or editing an activity.

#### Returns

`void`

#### Function

#### Source

[src/app/stores/activityStore.ts:115](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L115)

***

### createActivity()

> **createActivity**(`activity`): `Promise`\<`void`\>

Creates a new activity.

#### Parameters

• **activity**: [`Activity`](../../../models/activity/interfaces/Activity.md)

The activity to create.

#### Returns

`Promise`\<`void`\>

#### Async

#### Function

#### Source

[src/app/stores/activityStore.ts:127](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L127)

***

### deleteActivity()

> **deleteActivity**(`id`): `Promise`\<`void`\>

Deletes an activity.

#### Parameters

• **id**: `string`

The ID of the activity to delete.

#### Returns

`Promise`\<`void`\>

#### Async

#### Function

#### Source

[src/app/stores/activityStore.ts:183](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L183)

***

### loadActivities()

> **loadActivities**(): `Promise`\<`void`\>

Loads activities from the API and sets the activities state.

#### Returns

`Promise`\<`void`\>

#### Async

#### Function

#### Source

[src/app/stores/activityStore.ts:51](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L51)

***

### openForm()

> **openForm**(`id`?): `void`

Opens the form for creating or editing an activity.

#### Parameters

• **id?**: `string`

The ID of the activity to edit, if any.

#### Returns

`void`

#### Function

#### Source

[src/app/stores/activityStore.ts:105](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L105)

***

### selectActivity()

> **selectActivity**(`id`): `void`

Selects an activity by its ID.

#### Parameters

• **id**: `string`

The ID of the activity to select.

#### Returns

`void`

#### Function

#### Source

[src/app/stores/activityStore.ts:86](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L86)

***

### setLoadingInitial()

> **setLoadingInitial**(`state`): `void`

Sets the loading initial state.

#### Parameters

• **state**: `boolean`

The loading state to set.

#### Returns

`void`

#### Function

#### Source

[src/app/stores/activityStore.ts:76](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L76)

***

### updateActivity()

> **updateActivity**(`activity`): `Promise`\<`void`\>

Updates an existing activity.

#### Parameters

• **activity**: [`Activity`](../../../models/activity/interfaces/Activity.md)

The activity to update.

#### Returns

`Promise`\<`void`\>

#### Async

#### Function

#### Source

[src/app/stores/activityStore.ts:154](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/activityStore.ts#L154)
