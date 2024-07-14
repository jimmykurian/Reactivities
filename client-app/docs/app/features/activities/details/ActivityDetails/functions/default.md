[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/details/ActivityDetails](../README.md) / default

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

The JSX element representing the activity details.

## Component

ActivityDetails

## Description

A functional component that displays the details of an activity.

## Remarks

This component uses the Semantic UI React library to create a card layout for displaying activity details.
It includes an image, title, date, description, and buttons for editing or canceling the activity.
The `loadActivity` function is called to fetch the activity details based on the ID from the URL parameters.
The component accesses the `activityStore` from the MobX store context to get the selected activity and relevant functions.

## Example

Here is an example of how to use the ActivityDetails component:
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

<ActivityDetails />
```

## Source

[src/app/features/activities/details/ActivityDetails.tsx:42](https://github.com/jimmykurian/Reactivities/blob/c2b83f2afb021f3781b26a719c82722d16787bac/client-app/src/app/features/activities/details/ActivityDetails.tsx#L42)
