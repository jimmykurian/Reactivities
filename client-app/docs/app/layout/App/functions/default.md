[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/layout/App](../README.md) / default

# Function: default()

> **default**(): `JSX.Element`

## Returns

`JSX.Element`

The rendered App component.

## Component

App

## Description

The App component serves as the root component for the React application.
It conditionally renders the HomePage component when the user is at the root path ('/').
For all other paths, it renders the NavBar component and uses the Outlet component from react-router-dom to render matched child routes.

## Example

Here is an example of how to use the App component:
```tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from '../features/home/HomePage';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';

const MainApp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="activities" element={<ActivityDashboard />} />
      </Route>
    </Routes>
  </Router>
);

export default MainApp;
```

## Source

[src/app/layout/App.tsx:63](https://github.com/jimmykurian/Reactivities/blob/0508ba222a20e8a381c3bd4c99db6fa50d56eeb3/client-app/src/app/layout/App.tsx#L63)
