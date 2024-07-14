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
    ],
  },
];
```

## Source

[src/app/router/Routes.tsx:36](https://github.com/jimmykurian/Reactivities/blob/c2b83f2afb021f3781b26a719c82722d16787bac/client-app/src/app/router/Routes.tsx#L36)
