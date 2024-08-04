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

[src/app/stores/store.ts:50](https://github.com/jimmykurian/Reactivities/blob/af72bfec8c51b7602f492bc9e60a71a5f447d0af/client-app/src/app/stores/store.ts#L50)
