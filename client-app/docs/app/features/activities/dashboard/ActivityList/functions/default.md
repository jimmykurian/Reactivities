[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityList](../README.md) / default

# Function: default()

> **default**(`props`): `JSX.Element`

ActivityList component.

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The properties passed to the component.

## Returns

`JSX.Element`

The rendered ActivityList component.

## Component

## Remarks

This component maps over an array of activities and displays each one with its details using Semantic UI components.
Each activity includes a title, date, description, city, venue, and category, along with "View" and "Delete" buttons.
The `selectActivity` function is called when the "View" button is clicked, passing the activity's ID.
The `deleteActivity` function is called when the "Delete" button is clicked, passing the activity's ID.
The `submitting` prop is used to indicate whether a delete operation is in progress, which disables the delete button for the targeted activity.

## Example

```tsx
const activities = [
  { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
  { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
];

const selectActivity = (id: string) => console.log(id);
const deleteActivity = (id: string) => console.log(`Delete activity with id ${id}`);

<ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} submitting={false} />
```

## Source

[app/features/activities/dashboard/ActivityList.tsx:53](https://github.com/jimmykurian/Reactivities/blob/b285dbdeca2a76ed48753d209361112d619ac92f/client-app/src/app/features/activities/dashboard/ActivityList.tsx#L53)
