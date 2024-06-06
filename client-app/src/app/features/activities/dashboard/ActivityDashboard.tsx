import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';
import ActivityList from './ActivityList';

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid.Column width="10">
      <List>
        <ActivityList activities={activities} />
      </List>
    </Grid.Column>
  );
}
