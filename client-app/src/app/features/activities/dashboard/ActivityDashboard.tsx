import { Grid, List } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

/**
 * @author Jimmy Kurian
 * @component ActivityDashboard
 * @description The ActivityDashboard component displays a list of activities and their details or a form for editing/creating activities.
 * @returns {JSX.Element} The rendered ActivityDashboard component.
 *
 * @remarks
 * This component serves as the main dashboard for managing activities. It conditionally renders the `ActivityList`, `ActivityDetails`,
 * and `ActivityForm` components based on the state from the MobX store.
 *
 * @example
 * ```tsx
 * const activities = [
 *   { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
 *   { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
 * ];
 *
 * const deleteActivity = (id: string) => console.log(`Delete activity with id ${id}`);
 *
 * <ActivityDashboard />
 * ```
 */
export default observer(function ActivityDashboard(): JSX.Element {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;

  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          <ActivityList />
        </List>
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
});
