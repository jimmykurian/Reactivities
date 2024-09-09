[**Client App Documentation v0.0.0**](../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../README.md) / [app/features/errors/ServerError](../README.md) / default

# Function: default()

> **default**(`props`, `deprecatedLegacyContext`?): `ReactNode`

ServerError component displays a server error message and optionally shows the error's stack trace details.
It retrieves the error information from the MobX `commonStore` and renders it in a user-friendly format.

## Parameters

• **props**: `object`

• **deprecatedLegacyContext?**: `any`

**Deprecated**

**See**

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods)

## Returns

`ReactNode`

The rendered ServerError component displaying error details and stack trace if available.

## Component

## Example

```tsx
import ServerError from './ServerError';

function App() {
  return <ServerError />;
}
```

## Source

[src/app/features/errors/ServerError.tsx:28](https://github.com/jimmykurian/Reactivities/blob/f9f070aaf98b4106e71d50f160dc9e1dc32565f3/client-app/src/app/features/errors/ServerError.tsx#L28)
