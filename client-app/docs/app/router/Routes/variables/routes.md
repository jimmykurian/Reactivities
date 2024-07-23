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
      { path: 'createActivity', element: <ActivityForm /> },
      { path: 'manage/:id', element: <ActivityForm /> },
    ],
  },
];
```

## Source

[src/app/router/Routes.tsx:37](https://github.com/jimmykurian/Reactivities/blob/cfc61f80c2e285635750ab2aa8eddddc51c9a938/client-app/src/app/router/Routes.tsx#L37)
