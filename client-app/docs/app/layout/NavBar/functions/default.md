[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/layout/NavBar](../README.md) / default

# Function: default()

> **default**(): `JSX.Element`

## Returns

`JSX.Element`

The rendered NavBar component.

## Component

NavBar

## Description

The NavBar component serves as the navigation bar for the Reactivities application.
It includes a logo, a menu item for activities, and a button to create a new activity.

## Example

```tsx
import React from 'react';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <NavBar />
      // other components
    </div>
  );
}

export default App;
```

## Source

[src/app/layout/NavBar.tsx:34](https://github.com/jimmykurian/Reactivities/blob/af72bfec8c51b7602f492bc9e60a71a5f447d0af/client-app/src/app/layout/NavBar.tsx#L34)
