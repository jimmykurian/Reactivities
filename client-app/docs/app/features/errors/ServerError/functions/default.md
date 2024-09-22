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

[src/app/features/errors/ServerError.tsx:28](https://github.com/jimmykurian/Reactivities/blob/dbc3ed866e1f645e56a07b30e597ad4448fbda7a/client-app/src/app/features/errors/ServerError.tsx#L28)
