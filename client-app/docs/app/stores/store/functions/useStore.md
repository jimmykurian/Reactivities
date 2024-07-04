[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/stores/store](../README.md) / useStore

# Function: useStore()

> **useStore**(): [`Store`](../interfaces/Store.md)

Custom hook to use the store in React components.

## Returns

[`Store`](../interfaces/Store.md)

The store instance.

## Function

## Example

```tsx
import { useStore } from './store';

const MyComponent = () => {
  const { activityStore } = useStore();
  return <div>{activityStore.title}</div>;
};
```

## Source

[src/app/stores/store.ts:53](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/stores/store.ts#L53)
