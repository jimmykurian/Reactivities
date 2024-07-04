[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/layout/App](../README.md) / default

# Function: default()

> **default**(): `JSX.Element`

## Returns

`JSX.Element`

The rendered App component.

## Author

Jimmy Kurian

## Component

App

## Description

The App component serves as the root component for the React application.
It fetches activities from an API, maintains the activities state, and renders the NavBar and ActivityDashboard components.
It also utilizes the MobX store for additional state management.

## Remarks

The App component uses the `useEffect` hook to fetch activities from the API when the component mounts.
It includes the NavBar and ActivityDashboard components for displaying the navigation bar and list of activities, respectively.
The component also accesses the `activityStore` from the MobX store context to manage the activities.
If the activities are still loading, it displays a LoadingComponent.

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

[src/app/layout/App.tsx:58](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/layout/App.tsx#L58)
