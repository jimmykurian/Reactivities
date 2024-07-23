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
It renders the NavBar component and uses the Outlet component from react-router-dom to render matched child routes.

## Example

```tsx
// App component
return (
  <>
    <NavBar />
    <Container style={{ marginTop: '7em' }}>
      <Outlet />
    </Container>
  </>
);
```

## Source

[src/app/layout/App.tsx:43](https://github.com/jimmykurian/Reactivities/blob/cfc61f80c2e285635750ab2aa8eddddc51c9a938/client-app/src/app/layout/App.tsx#L43)
