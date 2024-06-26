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
import { ActivityStore } from './ActivityStore';

const activityStore = new ActivityStore();
console.log(activityStore.title); // Outputs: "Hello from MobX!"
```

## Constructors

### new default()

> **new default**(): [`default`](default.md)

Creates an instance of ActivityStore.
The constructor initializes the observables using MobX's makeObservable.

#### Returns

[`default`](default.md)

#### Source

[app/stores/activityStore.ts:34](https://github.com/jimmykurian/Reactivities/blob/5b5ed521e5b39ce1e9f25269c451ae4d7d2b1c5a/client-app/src/app/stores/activityStore.ts#L34)

## Properties

### title

> **title**: `string` = `'Hello from MobX!'`

The title of the activity store.

#### Source

[app/stores/activityStore.ts:28](https://github.com/jimmykurian/Reactivities/blob/5b5ed521e5b39ce1e9f25269c451ae4d7d2b1c5a/client-app/src/app/stores/activityStore.ts#L28)
