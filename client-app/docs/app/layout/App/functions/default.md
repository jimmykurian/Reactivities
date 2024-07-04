[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/layout/App](../README.md) / default

# Function: default()

> **default**(): `JSX.Element`

The App component serves as the root component for the React application.
It fetches activities from an API, maintains the activities state, and renders the NavBar and ActivityDashboard components.
It also utilizes the MobX store for additional state management.

## Returns

`JSX.Element`

The rendered App component.

## Component

## Remarks

The App component uses the `useEffect` hook to fetch activities from the API when the component mounts.
The `useState` hook is used to manage the submitting state.
The component includes the NavBar and ActivityDashboard components for displaying the navigation bar and list of activities, respectively.
The `handleDeleteActivity` function is used to manage deleting activities.
The component also accesses the `activityStore` from the MobX store context to manage the activities.

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

[src/app/layout/App.tsx:83](https://github.com/jimmykurian/Reactivities/blob/c5b8976c071486a4e7bfff58c75d9a474da2c558/client-app/src/app/layout/App.tsx#L83)
