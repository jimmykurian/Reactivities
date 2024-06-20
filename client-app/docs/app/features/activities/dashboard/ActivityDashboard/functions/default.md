[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityDashboard](../README.md) / default

# Function: default()

> **default**(`props`): `JSX.Element`

ActivityDashboard component.

## Parameters

• **props**: [`Props`](../interfaces/Props.md)

The properties passed to the component.

## Returns

`JSX.Element`

The rendered ActivityDashboard component.

## Component

## Remarks

This component serves as the dashboard to display a list of activities.
It uses the `Grid.Column` component from Semantic UI to structure the layout
and the `List` component to contain the `ActivityList` component.
The `ActivityDetails` component is conditionally rendered to display details
of the selected activity. Additionally, the `ActivityForm` component is rendered
for creating or editing activities.

## Example

```tsx
const activities = [
  { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
  { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
];

const selectedActivity = activities[0];
const selectActivity = (id: string) => console.log(id);
const cancelSelectActivity = () => console.log('Cancel selection');
const openForm = (id?: string) => console.log(`Open form for activity with id ${id}`);
const closeForm = () => console.log('Close form');
const createOrEdit = (activity: Activity) => console.log(`Create or edit activity with id ${activity.id}`);
const deleteActivity = (id: string) => console.log(`Delete activity with id ${id}`);

<ActivityDashboard
  activities={activities}
  selectedActivity={selectedActivity}
  selectActivity={selectActivity}
  cancelSelectActivity={cancelSelectActivity}
  openForm={openForm}
  closeForm={closeForm}
  createOrEdit={createOrEdit}
  deleteActivity={deleteActivity}
  submitting={false}
/>
```

## Source

[app/features/activities/dashboard/ActivityDashboard.tsx:83](https://github.com/jimmykurian/Reactivities/blob/44702a695ba6190a1c37512d565ed9970e06fec6/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L83)
