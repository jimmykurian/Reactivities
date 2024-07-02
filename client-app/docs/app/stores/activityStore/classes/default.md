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

[src/app/stores/activityStore.ts:36](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/stores/activityStore.ts#L36)

## Properties

### activities

> **activities**: [`Activity`](../../../models/activity/interfaces/Activity.md)[] = `[]`

#### Source

[src/app/stores/activityStore.ts:26](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/stores/activityStore.ts#L26)

***

### editMode

> **editMode**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:28](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/stores/activityStore.ts#L28)

***

### loading

> **loading**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:29](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/stores/activityStore.ts#L29)

***

### loadingInitial

> **loadingInitial**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:30](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/stores/activityStore.ts#L30)

***

### selectedActivity

> **selectedActivity**: `undefined` \| [`Activity`](../../../models/activity/interfaces/Activity.md) = `undefined`

#### Source

[src/app/stores/activityStore.ts:27](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/stores/activityStore.ts#L27)

## Methods

### cancelSelectedActivity()

> **cancelSelectedActivity**(): `void`

Cancels the selection of the currently selected activity.

#### Returns

`void`

#### Function

#### Source

[src/app/stores/activityStore.ts:87](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/stores/activityStore.ts#L87)

***

### closeForm()

> **closeForm**(): `void`

Closes the form for creating or editing an activity.

#### Returns

`void`

#### Function

#### Source

[src/app/stores/activityStore.ts:107](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/stores/activityStore.ts#L107)

***

### loadActivities()

> **loadActivities**(): `Promise`\<`void`\>

Loads activities from the API and sets the activities state.

#### Returns

`Promise`\<`void`\>

#### Async

#### Function

#### Source

[src/app/stores/activityStore.ts:47](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/stores/activityStore.ts#L47)

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

[src/app/stores/activityStore.ts:97](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/stores/activityStore.ts#L97)

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

[src/app/stores/activityStore.ts:78](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/stores/activityStore.ts#L78)

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

[src/app/stores/activityStore.ts:68](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/stores/activityStore.ts#L68)
