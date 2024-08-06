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

[src/app/stores/store.ts:50](https://github.com/jimmykurian/Reactivities/blob/53b13a08b38b7d13db7685da19b0f30adc1de6b5/client-app/src/app/stores/store.ts#L50)
