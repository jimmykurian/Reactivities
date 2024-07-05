[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/layout/LoadingComponent](../README.md) / default

# Function: default()

> **default**(`props`): `JSX.Element`

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The properties passed to the component.

## Returns

`JSX.Element`

The rendered LoadingComponent.

## Component

LoadingComponent

## Description

LoadingComponent renders a loading indicator with an optional message.

## Remarks

This component utilizes the `Dimmer` and `Loader` components from the Semantic UI React library.
The `inverted` prop controls the background and content color scheme, and the `content` prop allows for a customizable loading message.

## Example

```tsx
<LoadingComponent inverted={false} content="Please wait..." />
```

## Source

[src/app/layout/LoadingComponent.tsx:37](https://github.com/jimmykurian/Reactivities/blob/b7deb33720de249fc2929bf02ab0ec1eb6fc42cc/client-app/src/app/layout/LoadingComponent.tsx#L37)
