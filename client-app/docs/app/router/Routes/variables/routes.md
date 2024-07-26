[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/router/Routes](../README.md) / routes

# Variable: routes

> `const` **routes**: `RouteObject`[]

## Constant

routes

## Description

An array of route objects defining the routes for the application.
Each route object contains a path and the corresponding component to render.
The routes include paths for the home page, activity dashboard, activity details, and activity form.
The ActivityForm component is used for both creating and managing activities.
The `key` prop is used to differentiate between the create and manage routes for the ActivityForm component.

## Example

```tsx
const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'activities', element: <ActivityDashboard /> },
      { path: 'activities/:id', element: <ActivityDetails /> },
      { path: 'createActivity', element: <ActivityForm key="create" /> },
      { path: 'manage/:id', element: <ActivityForm key="manage" /> },
    ],
  },
];
```

## Source

[src/app/router/Routes.tsx:40](https://github.com/jimmykurian/Reactivities/blob/f19dbe6eeef2d0968af80c70ca59448062698db4/client-app/src/app/router/Routes.tsx#L40)
