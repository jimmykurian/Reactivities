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
The routes include paths for the activity dashboard, activity details, and activity form.
The ActivityForm component is used for both creating and managing activities.
The `key` prop is used to differentiate between the create and manage routes for the ActivityForm component.

## Example

```tsx
const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'activities', element: <ActivityDashboard /> },
      { path: 'activities/:id', element: <ActivityDetails /> },
      { path: 'createActivity', element: <ActivityForm key="create" /> },
      { path: 'manage/:id', element: <ActivityForm key="manage" /> },
    ],
  },
];
```

## Source

[src/app/router/Routes.tsx:39](https://github.com/jimmykurian/Reactivities/blob/2ac04b3bd2078e178d4132d39af05e6bd9aa429e/client-app/src/app/router/Routes.tsx#L39)
