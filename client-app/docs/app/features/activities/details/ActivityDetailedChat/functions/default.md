[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/details/ActivityDetailedChat](../README.md) / default

# Function: default()

> **default**(`props`, `deprecatedLegacyContext`?): `ReactNode`

## Parameters

• **props**: `object`

• **deprecatedLegacyContext?**: `any`

**Deprecated**

**See**

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods)

## Returns

`ReactNode`

The rendered ActivityDetailedChat component.

## Component

ActivityDetailedChat

## Description

The ActivityDetailedChat component renders a chat interface for users to discuss the event. It includes a list of comments and a form to add new replies.

## Remarks

This component uses Semantic UI React components to create a chat interface. It displays a header, a list of comments, and a form for adding new replies. Each comment includes an avatar, author, metadata, text, and actions for replying.

## Example

Here is an example of how to use the ActivityDetailedChat component:
```tsx
import React from 'react';
import ActivityDetailedChat from './features/activities/details/ActivityDetailedChat';

const App = () => (
  <div>
    <ActivityDetailedChat />
  </div>
);

export default App;
```

## Source

[src/app/features/activities/details/ActivityDetailedChat.tsx:34](https://github.com/jimmykurian/Reactivities/blob/3f805628d10ff0a50931fec09e965ef4a2576e55/client-app/src/app/features/activities/details/ActivityDetailedChat.tsx#L34)
