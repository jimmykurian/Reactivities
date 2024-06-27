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
console.log(activityStore.title); // Outputs: "Hello from MobX!"
activityStore.setTitle();
console.log(activityStore.title); // Outputs: "Hello from MobX!!"
```

## Constructors

### new default()

> **new default**(): [`default`](default.md)

Creates an instance of ActivityStore.
The constructor initializes the observables using MobX's makeAutoObservable.

#### Returns

[`default`](default.md)

#### Source

[app/stores/activityStore.ts:36](https://github.com/jimmykurian/Reactivities/blob/b285dbdeca2a76ed48753d209361112d619ac92f/client-app/src/app/stores/activityStore.ts#L36)

## Properties

### title

> **title**: `string` = `'Hello from MobX!'`

The title of the activity store.

#### Source

[app/stores/activityStore.ts:30](https://github.com/jimmykurian/Reactivities/blob/b285dbdeca2a76ed48753d209361112d619ac92f/client-app/src/app/stores/activityStore.ts#L30)

## Methods

### setTitle()

> **setTitle**(): `void`

Updates the title by appending an exclamation mark.

#### Returns

`void`

#### Source

[app/stores/activityStore.ts:43](https://github.com/jimmykurian/Reactivities/blob/b285dbdeca2a76ed48753d209361112d619ac92f/client-app/src/app/stores/activityStore.ts#L43)
