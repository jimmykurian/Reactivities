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
 */
export interface Props {
  activities: Activity[];
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
 * of the first activity in the list.
 *
 * @example
 * ```tsx
 * const activities = [
 *   { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
 *   { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
 * ];
 *
 * <ActivityDashboard activities={activities} />
 * ```
 */
export default function ActivityDashboard({ activities }: Props): JSX.Element {
  return (
    <Grid>
      <Grid.Column width="10">
        <List>
          <ActivityList activities={activities} />
        </List>
      </Grid.Column>
      <Grid.Column width="6">
        {activities[0] && <ActivityDetails activity={activities[0]} />}
        <ActivityForm />
      </Grid.Column>
    </Grid>
  );
}
