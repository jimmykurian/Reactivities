[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/layout/NavBar](../README.md) / default

# Function: default()

> **default**(`props`): `JSX.Element`

The NavBar component serves as the navigation bar for the Reactivities application.
It includes a logo, a menu item for activities, and a button to create a new activity.

## Parameters

• **props**: `Props`

The properties passed to the component.

## Returns

`JSX.Element`

The rendered NavBar component.

## Component

## Example

```tsx
import React from 'react';
import NavBar from './NavBar';

function App() {
  const openForm = () => {
    // logic to open the form
  };

  return (
    <div>
      <NavBar openForm={openForm} />
      // other components
    </div>
  );
}

export default App;
```

## Source

[app/layout/NavBar.tsx:50](https://github.com/jimmykurian/Reactivities/blob/d382f1c721a2ea58fd894b7b4be5c6512186a40a/client-app/src/app/layout/NavBar.tsx#L50)
