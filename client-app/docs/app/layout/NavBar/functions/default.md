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

[app/layout/NavBar.tsx:32](https://github.com/jimmykurian/Reactivities/blob/4ab199bddea0052df810fe9ea0493ff906b43566/client-app/src/app/layout/NavBar.tsx#L32)