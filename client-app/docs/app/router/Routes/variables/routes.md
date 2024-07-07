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
  },
];
```

## Source

[src/app/router/Routes.tsx:26](https://github.com/jimmykurian/Reactivities/blob/437bfc84a722e4dd815015c3076f1080f8a79d46/client-app/src/app/router/Routes.tsx#L26)
