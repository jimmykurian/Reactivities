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

[app/stores/activityStore.ts:36](https://github.com/jimmykurian/Reactivities/blob/41c65456cc86c8f767cf2b3fae7f0fff76c6e321/client-app/src/app/stores/activityStore.ts#L36)

## Properties

### activities

> **activities**: [`Activity`](../../../models/activity/interfaces/Activity.md)[] = `[]`

#### Source

[app/stores/activityStore.ts:26](https://github.com/jimmykurian/Reactivities/blob/41c65456cc86c8f767cf2b3fae7f0fff76c6e321/client-app/src/app/stores/activityStore.ts#L26)

***

### editMode

> **editMode**: `boolean` = `false`

#### Source

[app/stores/activityStore.ts:28](https://github.com/jimmykurian/Reactivities/blob/41c65456cc86c8f767cf2b3fae7f0fff76c6e321/client-app/src/app/stores/activityStore.ts#L28)

***

### loading

> **loading**: `boolean` = `false`

#### Source

[app/stores/activityStore.ts:29](https://github.com/jimmykurian/Reactivities/blob/41c65456cc86c8f767cf2b3fae7f0fff76c6e321/client-app/src/app/stores/activityStore.ts#L29)

***

### loadingInitial

> **loadingInitial**: `boolean` = `false`

#### Source

[app/stores/activityStore.ts:30](https://github.com/jimmykurian/Reactivities/blob/41c65456cc86c8f767cf2b3fae7f0fff76c6e321/client-app/src/app/stores/activityStore.ts#L30)

***

### selectedActivity

> **selectedActivity**: `null` \| [`Activity`](../../../models/activity/interfaces/Activity.md) = `null`

#### Source

[app/stores/activityStore.ts:27](https://github.com/jimmykurian/Reactivities/blob/41c65456cc86c8f767cf2b3fae7f0fff76c6e321/client-app/src/app/stores/activityStore.ts#L27)

## Methods

### loadActivities()

> **loadActivities**(): `Promise`\<`void`\>

Loads activities from the API and sets the activities state.

#### Returns

`Promise`\<`void`\>

#### Async

#### Function

#### Source

[app/stores/activityStore.ts:47](https://github.com/jimmykurian/Reactivities/blob/41c65456cc86c8f767cf2b3fae7f0fff76c6e321/client-app/src/app/stores/activityStore.ts#L47)

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

[app/stores/activityStore.ts:68](https://github.com/jimmykurian/Reactivities/blob/41c65456cc86c8f767cf2b3fae7f0fff76c6e321/client-app/src/app/stores/activityStore.ts#L68)
