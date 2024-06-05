import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid.Column width="10">
      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </Grid.Column>
  );
}