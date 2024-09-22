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

A functional component that renders a form for activity details using Formik for form management.

## Remarks

This component utilizes the Semantic UI React library and Formik to create a form layout
for collecting activity details such as title, description, category, date, city, and venue.
It includes input fields and buttons for submitting or canceling the form.

- **Form State Management:** The form state is managed using Formik, which simplifies handling form data and validation.
- **Formik Integration:** The `Formik` component initializes the form with `activity` data and handles form submission.
- **Activity Loading:** The component accesses the `activityStore` from the MobX store context to load activity details and manage loading states.
- **Side Effects:** The `useEffect` hook is used to load activity details when the component is mounted, especially if an activity ID is provided via URL parameters using `useParams`.
- **Loading Indicator:** The `LoadingComponent` is displayed while activity details are being loaded.
- **Routing:** The `Link` component from `react-router-dom` is used for navigation, allowing users to cancel and return to the activities list.
- **MobX Integration:** The `observer` higher-order component from `mobx-react-lite` is used to make the component reactive to MobX state changes.
- **Form Submission:** Currently, the `onSubmit` function of Formik logs the form values to the console for debugging purposes. This will be updated to handle creating or updating activities by interacting with the `activityStore`.

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

[src/app/features/activities/form/ActivityForm.tsx:55](https://github.com/jimmykurian/Reactivities/blob/dbc3ed866e1f645e56a07b30e597ad4448fbda7a/client-app/src/app/features/activities/form/ActivityForm.tsx#L55)
