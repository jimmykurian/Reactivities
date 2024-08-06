[**Client App Documentation v0.0.0**](../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../README.md) / [app/features/home/HomePage](../README.md) / default

# Function: default()

> **default**(): `JSX.Element`

## Returns

`JSX.Element`

The rendered HomePage component.

## Component

HomePage

## Description

The HomePage component serves as the home page of the application. It displays a heading, a welcome message, and a button that links to the activities page within a container.

## Remarks

This component uses the Semantic UI React library to create a styled container.
The container includes a heading, a welcome message, and a button that navigates to the activities page.
The component is styled with an inverted segment and centered text.

## Example

Here is an example of how to use the HomePage component:
```tsx
import React from 'react';
import HomePage from './HomePage';

const App = () => (
  <div>
    <HomePage />
  </div>
);

export default App;
```

## Source

[src/app/features/home/HomePage.tsx:36](https://github.com/jimmykurian/Reactivities/blob/53b13a08b38b7d13db7685da19b0f30adc1de6b5/client-app/src/app/features/home/HomePage.tsx#L36)
