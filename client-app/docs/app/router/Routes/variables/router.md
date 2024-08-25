[**Client App Documentation v0.0.0**](../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../README.md) / [app/router/Routes](../README.md) / router

# Variable: router

> `const` **router**: `ReturnType`\<*typeof* `createBrowserRouter`\>

## Constant

router

## Description

Creates a browser router using the defined routes.
This router is used to handle navigation and rendering of components based on the URL path.
The router enables single-page application (SPA) behavior by updating the URL and rendering the corresponding components without reloading the page.

## Example

```tsx
const router = createBrowserRouter(routes);
```

## Source

[src/app/router/Routes.tsx:65](https://github.com/jimmykurian/Reactivities/blob/2ac04b3bd2078e178d4132d39af05e6bd9aa429e/client-app/src/app/router/Routes.tsx#L65)
