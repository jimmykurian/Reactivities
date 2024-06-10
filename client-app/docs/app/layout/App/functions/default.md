[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/layout/App](../README.md) / default

# Function: default()

> **default**(): `JSX.Element`

The App component serves as the root component for the React application.
It fetches activities from an API, maintains the activities state, and renders the NavBar and ActivityDashboard components.

## Returns

`JSX.Element`

The rendered App component.

## Component

## Remarks

The App component uses the `useEffect` hook to fetch activities from the API when the component mounts.
The `useState` hook is used to manage the activities state.
The component includes the NavBar and ActivityDashboard components for displaying the navigation bar and list of activities, respectively.

## Example

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

## Source

[app/layout/App.tsx:38](https://github.com/jimmykurian/Reactivities/blob/a0f275a8cd60ebcdc3f7b728918122de0a884171/client-app/src/app/layout/App.tsx#L38)
