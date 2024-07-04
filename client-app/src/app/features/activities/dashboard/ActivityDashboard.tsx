/**
 * @author Jimmy Kurian
 * @name ActivityDashboard
 */

import { Grid, List } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import { Activity } from '../../../models/activity';

/**
 * Props interface for the ActivityDashboard component.
 *
 * @interface Props
 * @property {Activity[]} activities - Array of activities to be displayed.
 * @property {(activity: Activity) => void} createOrEdit - Function to create or edit an activity.
 * @property {(id: string) => void} deleteActivity - Function to delete an activity by ID.
 * @property {boolean} [submitting] - Indicates whether a delete operation is in progress.
 */
export interface Props {
  activities: Activity[];
  deleteActivity: (id: string) => void;
  submitting?: boolean;
}

/**
 * ActivityDashboard component.
 *
 * @component
 * @param {Props} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered ActivityDashboard component.
 *
 * @remarks
 * This component serves as the dashboard to display a list of activities.
 * It uses the `Grid.Column` component from Semantic UI to structure the layout
 * and the `List` component to contain the `ActivityList` component.
 * The `ActivityDetails` component is conditionally rendered to display details
 * of the selected activity from the MobX store context. Additionally, the `ActivityForm`
 * component is conditionally rendered for creating or editing activities.
 *
 * @example
 * ```tsx
 * const activities = [
 *   { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
 *   { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
 * ];
 *
 * const createOrEdit = (activity: Activity) => console.log(`Create or edit activity with id ${activity.id}`);
 * const deleteActivity = (id: string) => console.log(`Delete activity with id ${id}`);
 *
 * <ActivityDashboard
 *   activities={activities}
 *   createOrEdit={createOrEdit}
 *   deleteActivity={deleteActivity}
 *   submitting={false}
 * />
 * ```
 */
export default observer(function ActivityDashboard({
  activities,
  deleteActivity,
  submitting,
}: Props): JSX.Element {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;

  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          <ActivityList
            activities={activities}
            deleteActivity={deleteActivity}
            submitting={submitting}
          />
        </List>
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
});
