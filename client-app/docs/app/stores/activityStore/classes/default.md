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

[src/app/stores/activityStore.ts:46](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L46)

## Properties

### activityRegistry

> **activityRegistry**: `Map`\<`string`, [`Activity`](../../../models/activity/interfaces/Activity.md)\>

#### Source

[src/app/stores/activityStore.ts:27](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L27)

***

### editMode

> **editMode**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:33](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L33)

***

### loading

> **loading**: `boolean` = `false`

#### Source

[src/app/stores/activityStore.ts:36](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L36)

***

### loadingInitial

> **loadingInitial**: `boolean` = `true`

#### Source

[src/app/stores/activityStore.ts:39](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L39)

***

### selectedActivity

> **selectedActivity**: `undefined` \| [`Activity`](../../../models/activity/interfaces/Activity.md) = `undefined`

#### Source

[src/app/stores/activityStore.ts:30](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L30)

## Accessors

### activitiesByDate

> `get` **activitiesByDate**(): [`Activity`](../../../models/activity/interfaces/Activity.md)[]

#### Getter

activitiesByDate

#### Description

Gets the activities sorted by date.

#### Returns

[`Activity`](../../../models/activity/interfaces/Activity.md)[]

#### Source

[src/app/stores/activityStore.ts:55](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L55)

***

### groupedActivities

> `get` **groupedActivities**(): [`string`, [`Activity`](../../../models/activity/interfaces/Activity.md)[]][]

#### Getter

groupedActivities

#### Description

Gets the activities grouped by date.

#### Returns

[`string`, [`Activity`](../../../models/activity/interfaces/Activity.md)[]][]

#### Source

[src/app/stores/activityStore.ts:66](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L66)

## Methods

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

[src/app/stores/activityStore.ts:170](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L170)

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

[src/app/stores/activityStore.ts:221](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L221)

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

[src/app/stores/activityStore.ts:87](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L87)

***

### loadActivity()

> **loadActivity**(`id`): `Promise`\<`undefined` \| [`Activity`](../../../models/activity/interfaces/Activity.md)\>

#### Parameters

• **id**: `string`

The ID of the activity to load.

#### Returns

`Promise`\<`undefined` \| [`Activity`](../../../models/activity/interfaces/Activity.md)\>

#### Async

#### Function

loadActivity

#### Description

Loads a single activity by ID from the API or retrieves it from the local state.

#### Source

[src/app/stores/activityStore.ts:112](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L112)

***

### setLoadingInitial()

> **setLoadingInitial**(`state`): `void`

#### Parameters

• **state**: `boolean`

The loading state to set.

#### Returns

`void`

#### Function

setLoadingInitial

#### Description

Sets the loading initial state.

#### Source

[src/app/stores/activityStore.ts:159](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L159)

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

[src/app/stores/activityStore.ts:196](https://github.com/jimmykurian/Reactivities/blob/25239b27572015f28b805cc64267cdbee9f4c7b1/client-app/src/app/stores/activityStore.ts#L196)
