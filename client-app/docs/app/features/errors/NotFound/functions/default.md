[**Client App Documentation v0.0.0**](../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../README.md) / [app/features/errors/NotFound](../README.md) / default

# Function: default()

> **default**(): `JSX.Element`

NotFound component displays a message indicating that the requested page could not be found.
It provides a button for users to navigate back to the activities page.

## Returns

`JSX.Element`

The rendered NotFound component.

## Component

## Example

```tsx
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Source

[src/app/features/errors/NotFound.tsx:32](https://github.com/jimmykurian/Reactivities/blob/5706c36bcf0d6b31b6711b289307934f1dd8355e/client-app/src/app/features/errors/NotFound.tsx#L32)
