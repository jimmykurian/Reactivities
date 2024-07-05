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
Initializes the observables using MobX's makeAutoObservable.

#### Source

[src/app/stores/activityStore.ts:46](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L46)

## Properties

### activities

> **activities**: [`Activity`](../../../models/activity/interfaces/Activity.md)[] = `[]`

#### Source

[src/app/stores/activityStore.ts:27](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L27)

***

### editMode

> **editMode**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:33](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L33)

***

### loading

> **loading**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:36](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L36)

***

### loadingInitial

> **loadingInitial**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:39](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L39)

***

### selectedActivity

> **selectedActivity**: `undefined` \| [`Activity`](../../../models/activity/interfaces/Activity.md) = `undefined`

#### Source

[src/app/stores/activityStore.ts:30](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L30)

## Methods

### cancelSelectedActivity()

> **cancelSelectedActivity**(): `void`

#### Returns

`void`

#### Function

cancelSelectedActivity

#### Description

Cancels the selection of the currently selected activity.

#### Source

[src/app/stores/activityStore.ts:97](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L97)

***

### closeForm()

> **closeForm**(): `void`

#### Returns

`void`

#### Function

closeForm

#### Description

Closes the form for creating or editing an activity.

#### Source

[src/app/stores/activityStore.ts:115](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L115)

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

createActivity

#### Description

Creates a new activity.

#### Source

[src/app/stores/activityStore.ts:126](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L126)

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

deleteActivity

#### Description

Deletes an activity by its ID.

#### Source

[src/app/stores/activityStore.ts:180](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L180)

***

### loadActivities()

> **loadActivities**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Async

#### Function

loadActivities

#### Description

Loads activities from the API and sets the activities state.

#### Source

[src/app/stores/activityStore.ts:56](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L56)

***

### openForm()

> **openForm**(`id`?): `void`

#### Parameters

• **id?**: `string`

The ID of the activity to edit, if any.

#### Returns

`void`

#### Function

openForm

#### Description

Opens the form for creating or editing an activity.

#### Source

[src/app/stores/activityStore.ts:106](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L106)

***

### selectActivity()

> **selectActivity**(`id`): `void`

#### Parameters

• **id**: `string`

The ID of the activity to select.

#### Returns

`void`

#### Function

selectActivity

#### Description

Selects an activity by its ID.

#### Source

[src/app/stores/activityStore.ts:89](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L89)

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

setLoadingInitial

#### Description

Sets the loading initial state

#### Source

[src/app/stores/activityStore.ts:80](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L80)

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

updateActivity

#### Description

Updates an existing activity.

#### Source

[src/app/stores/activityStore.ts:152](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/stores/activityStore.ts#L152)
