[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/layout/LoadingComponent](../README.md) / default

# Function: default()

> **default**(`props`): `JSX.Element`

LoadingComponent renders a loading indicator with an optional message.

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The properties passed to the component.

## Returns

`JSX.Element`

The rendered LoadingComponent.

## Component

## Remarks

This component utilizes the `Dimmer` and `Loader` components from the Semantic UI React library.
The `inverted` prop controls the background and content color scheme, and the `content` prop allows for a customizable loading message.

## Example

```tsx
<LoadingComponent inverted={false} content="Please wait..." />
```

## Source

[src/app/layout/LoadingComponent.tsx:36](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/layout/LoadingComponent.tsx#L36)
