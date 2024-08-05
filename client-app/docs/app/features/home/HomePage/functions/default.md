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

The HomePage component serves as the home page of the application. It displays a heading and a link to the activities page within a container.

## Remarks

This component uses the Semantic UI React library to create a styled container.
The container includes a heading and a link that navigates to the activities page.

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

[src/app/features/home/HomePage.tsx:35](https://github.com/jimmykurian/Reactivities/blob/c193146f41fb278d3aa689957dee7f5206c157e3/client-app/src/app/features/home/HomePage.tsx#L35)
