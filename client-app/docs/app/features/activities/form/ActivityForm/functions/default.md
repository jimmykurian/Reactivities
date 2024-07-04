[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/form/ActivityForm](../README.md) / default

# Function: default()

> **default**(`props`, `deprecatedLegacyContext`?): `ReactNode`

A functional component that renders a form for activity details.

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

## Remarks

This component uses the Semantic UI React library to create a form layout
for collecting activity details such as title, description, category, date, city, and venue.
It includes input fields and buttons for submitting or canceling the form.
The form state is managed using the `useState` hook, and the `handleInputChange` function updates the form state.
The `handleSubmit` function is used to create or edit the activity when the form is submitted.
The component accesses the `activityStore` from the MobX store context to get the selected activity, closeForm, createActivity, and updateActivity functions.

## Example

Here is an example of how to use the ActivityForm component:
```tsx
const activity = {
  id: '1',
  title: 'Morning Run',
  date: '2024-06-12',
  description: 'A quick morning run around the park.',
  category: 'exercise',
  city: 'New York',
  venue: 'Central Park'
};

<ActivityForm />
```

## Source

[src/app/features/activities/form/ActivityForm.tsx:41](https://github.com/jimmykurian/Reactivities/blob/7242251934a0465caac7d53316c5f07fee39a833/client-app/src/app/features/activities/form/ActivityForm.tsx#L41)
