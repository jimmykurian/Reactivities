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

[app/stores/store.ts:53](https://github.com/jimmykurian/Reactivities/blob/41c65456cc86c8f767cf2b3fae7f0fff76c6e321/client-app/src/app/stores/store.ts#L53)
