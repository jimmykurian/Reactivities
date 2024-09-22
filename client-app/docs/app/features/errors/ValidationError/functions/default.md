[**Client App Documentation v0.0.0**](../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../README.md) / [app/features/errors/ValidationError](../README.md) / default

# Function: default()

> **default**(`props`): `JSX.Element`

ValidationError component displays a list of error messages in a red error message box.
This component is primarily used for displaying form validation errors.

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The props for the ValidationError component.

## Returns

`JSX.Element`

The rendered ValidationError component.

## Component

## Example

```tsx
<ValidationError errors={['Email is required', 'Password must be at least 6 characters']} />
```

## Source

[src/app/features/errors/ValidationError.tsx:31](https://github.com/jimmykurian/Reactivities/blob/dbc3ed866e1f645e56a07b30e597ad4448fbda7a/client-app/src/app/features/errors/ValidationError.tsx#L31)
