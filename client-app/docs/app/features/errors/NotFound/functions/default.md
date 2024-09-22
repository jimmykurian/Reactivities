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

[src/app/features/errors/NotFound.tsx:32](https://github.com/jimmykurian/Reactivities/blob/dbc3ed866e1f645e56a07b30e597ad4448fbda7a/client-app/src/app/features/errors/NotFound.tsx#L32)
