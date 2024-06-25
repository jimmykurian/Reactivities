/**
 * @author Jimmy Kurian
 * @name ActivityDashboard
 */

import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

/**
 * Props interface for the ActivityDashboard component.
 *
 * @interface Props
 * @property {Activity[]} activities - Array of activities to be displayed.
 * @property {Activity | undefined} selectedActivity - The currently selected activity.
 * @property {(id: string) => void} selectActivity - Function to select an activity by ID.
 * @property {() => void} cancelSelectActivity - Function to cancel the selection of an activity.
 * @property {boolean | undefined} editMode - Boolean indicating if the form is in edit mode.
 * @property {(id?: string) => void} openForm - Function to open the form for editing or creating an activity.
 * @property {() => void} closeForm - Function to close the form.
 * @property {(activity: Activity) => void} createOrEdit - Function to create or edit an activity.
 * @property {(id: string) => void} deleteActivity - Function to delete an activity by ID.
 * @property {boolean} [submitting] - Indicates whether the form submission is in progress.
 */
export interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode?: boolean;
  openForm: (id?: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
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
 * of the selected activity. Additionally, the `ActivityForm` component is rendered
 * for creating or editing activities.
 *
 * @example
 * ```tsx
 * const activities = [
 *   { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
 *   { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
 * ];
 *
 * const selectedActivity = activities[0];
 * const selectActivity = (id: string) => console.log(id);
 * const cancelSelectActivity = () => console.log('Cancel selection');
 * const openForm = (id?: string) => console.log(`Open form for activity with id ${id}`);
 * const closeForm = () => console.log('Close form');
 * const createOrEdit = (activity: Activity) => console.log(`Create or edit activity with id ${activity.id}`);
 * const deleteActivity = (id: string) => console.log(`Delete activity with id ${id}`);
 *
 * <ActivityDashboard
 *   activities={activities}
 *   selectedActivity={selectedActivity}
 *   selectActivity={selectActivity}
 *   cancelSelectActivity={cancelSelectActivity}
 *   openForm={openForm}
 *   closeForm={closeForm}
 *   createOrEdit={createOrEdit}
 *   deleteActivity={deleteActivity}
 *   submitting={false}
 * />
 * ```
 */
export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteActivity,
  submitting,
}: Props): JSX.Element {
  return (
    <Grid>
      <Grid.Column width="10">
        <List>
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}
            submitting={submitting}
          />
        </List>
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
            createOrEdit={createOrEdit}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
