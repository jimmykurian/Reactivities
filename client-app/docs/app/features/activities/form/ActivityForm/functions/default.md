[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/form/ActivityForm](../README.md) / default

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

The JSX element representing the activity form.

## Component

ActivityForm

## Description

A functional component that renders a form for activity details.

## Remarks

This component uses the Semantic UI React library to create a form layout
for collecting activity details such as title, description, category, date, city, and venue.
It includes input fields and buttons for submitting or canceling the form.
The form state is managed using the `useState` hook, and the `handleInputChange` function updates the form state.
The `handleSubmit` function is used to create or edit the activity when the form is submitted.
The component accesses the `activityStore` from the MobX store context to get the selected activity, createActivity, updateActivity, and loading functions.
The `loadActivity` function is used to load the activity details when the component is mounted.
The `LoadingComponent` is displayed while the activity details are being loaded.

## Example

Here is an example of how to use the ActivityForm component:
```tsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreProvider } from './stores/store';
import ActivityForm from './features/activities/form/ActivityForm';

const App = () => (
  <StoreProvider>
    <Router>
      <Route path="/manage/:id?" component={ActivityForm} />
    </Router>
  </StoreProvider>
);

export default App;
```

## Source

[src/app/features/activities/form/ActivityForm.tsx:50](https://github.com/jimmykurian/Reactivities/blob/633810562ac0154bf2188296ae36469e6b58f86e/client-app/src/app/features/activities/form/ActivityForm.tsx#L50)
