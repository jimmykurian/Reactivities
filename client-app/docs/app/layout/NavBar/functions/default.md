[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/layout/NavBar](../README.md) / default

# Function: default()

> **default**(): `JSX.Element`

The NavBar component serves as the navigation bar for the Reactivities application.
It includes a logo, a menu item for activities, and a button to create a new activity.

## Returns

`JSX.Element`

The rendered NavBar component.

## Component

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

[src/app/layout/NavBar.tsx:33](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/layout/NavBar.tsx#L33)
