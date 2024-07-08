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
      { path: 'createActivity', element: <ActivityForm /> },
    ],
  },
];
```

## Source

[src/app/router/Routes.tsx:34](https://github.com/jimmykurian/Reactivities/blob/ab68919949da6f10746423fc739292afd2dfa6f7/client-app/src/app/router/Routes.tsx#L34)
