[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/stores/activityStore](../README.md) / default

# Class: default

ActivityStore class.

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
The constructor initializes the observables using MobX's makeAutoObservable.

#### Returns

[`default`](default.md)

#### Source

[src/app/stores/activityStore.ts:37](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L37)

## Properties

### activities

> **activities**: [`Activity`](../../../models/activity/interfaces/Activity.md)[] = `[]`

#### Source

[src/app/stores/activityStore.ts:27](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L27)

***

### editMode

> **editMode**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:29](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L29)

***

### loading

> **loading**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:30](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L30)

***

### loadingInitial

> **loadingInitial**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:31](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L31)

***

### selectedActivity

> **selectedActivity**: `undefined` \| [`Activity`](../../../models/activity/interfaces/Activity.md) = `undefined`

#### Source

[src/app/stores/activityStore.ts:28](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L28)

## Methods

### cancelSelectedActivity()

> **cancelSelectedActivity**(): `void`

Cancels the selection of the currently selected activity.

#### Returns

`void`

#### Function

#### Source

[src/app/stores/activityStore.ts:92](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L92)

***

### closeForm()

> **closeForm**(): `void`

Closes the form for creating or editing an activity.

#### Returns

`void`

#### Function

#### Source

[src/app/stores/activityStore.ts:112](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L112)

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

[src/app/stores/activityStore.ts:124](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L124)

***

### loadActivities()

> **loadActivities**(): `Promise`\<`void`\>

Loads activities from the API and sets the activities state.

#### Returns

`Promise`\<`void`\>

#### Async

#### Function

#### Source

[src/app/stores/activityStore.ts:48](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L48)

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

[src/app/stores/activityStore.ts:102](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L102)

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

[src/app/stores/activityStore.ts:83](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L83)

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

[src/app/stores/activityStore.ts:73](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L73)

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

[src/app/stores/activityStore.ts:151](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/stores/activityStore.ts#L151)
