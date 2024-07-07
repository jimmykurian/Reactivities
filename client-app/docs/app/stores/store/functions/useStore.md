[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/stores/store](../README.md) / useStore

# Function: useStore()

> **useStore**(): [`Store`](../interfaces/Store.md)

## Returns

[`Store`](../interfaces/Store.md)

The store instance.

## Function

Store

## Description

Custom hook to use the store in React components.

## Example

```tsx
import { useStore } from './store';

const MyComponent = () => {
  const { activityStore } = useStore();
  return <div>{activityStore.title}</div>;
};
```

## Source

[src/app/stores/store.ts:50](https://github.com/jimmykurian/Reactivities/blob/437bfc84a722e4dd815015c3076f1080f8a79d46/client-app/src/app/stores/store.ts#L50)
