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

[src/app/layout/LoadingComponent.tsx:37](https://github.com/jimmykurian/Reactivities/blob/53b13a08b38b7d13db7685da19b0f30adc1de6b5/client-app/src/app/layout/LoadingComponent.tsx#L37)
