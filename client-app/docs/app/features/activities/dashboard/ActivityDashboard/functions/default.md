[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityDashboard](../README.md) / default

# Function: default()

> **default**(`props`, `deprecatedLegacyContext`?): `ReactNode`

ActivityDashboard component.

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The properties passed to the component.

• **deprecatedLegacyContext?**: `any`

**Deprecated**

**See**

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods)

## Returns

`ReactNode`

The rendered ActivityDashboard component.

## Component

## Remarks

This component serves as the dashboard to display a list of activities.
It uses the `Grid.Column` component from Semantic UI to structure the layout
and the `List` component to contain the `ActivityList` component.
The `ActivityDetails` component is conditionally rendered to display details
of the selected activity from the MobX store context. Additionally, the `ActivityForm`
component is conditionally rendered for creating or editing activities.

## Example

```tsx
const activities = [
  { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
  { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
];

const createOrEdit = (activity: Activity) => console.log(`Create or edit activity with id ${activity.id}`);
const deleteActivity = (id: string) => console.log(`Delete activity with id ${id}`);

<ActivityDashboard
  activities={activities}
  createOrEdit={createOrEdit}
  deleteActivity={deleteActivity}
  submitting={false}
/>
```

## Source

[src/app/features/activities/dashboard/ActivityDashboard.tsx:63](https://github.com/jimmykurian/Reactivities/blob/05f3a8dcd798d01b8ed4c46df32bd7a1c177607c/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L63)
