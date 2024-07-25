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

[src/app/router/Routes.tsx:66](https://github.com/jimmykurian/Reactivities/blob/633810562ac0154bf2188296ae36469e6b58f86e/client-app/src/app/router/Routes.tsx#L66)
