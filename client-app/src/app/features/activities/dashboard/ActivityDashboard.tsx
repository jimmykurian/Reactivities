/**
 * @file ActivityDashboard.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityDashboard component which serves as the main dashboard for managing activities.
 * It conditionally renders the ActivityList, and includes a placeholder for activity filters.
 * If activities are still loading, it displays the LoadingComponent.
 */

import { Grid, List } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import LoadingComponent from '../../../layout/LoadingComponent';

/**
 * @component ActivityDashboard
 * @description The ActivityDashboard component displays a list of activities and includes a placeholder for activity filters.
 *
 * @returns {JSX.Element} The rendered ActivityDashboard component.
 *
 * @remarks
 * This component serves as the main dashboard for managing activities. It conditionally renders the `ActivityList`,
 * and includes a placeholder for activity filters. If the activities are still loading, it displays a LoadingComponent.
 *
 * @example
 * ```tsx
 * import React, { useEffect } from 'react';
 * import { observer } from 'mobx-react-lite';
 * import { useStore } from './stores/store';
 * import ActivityDashboard from './features/activities/dashboard/ActivityDashboard';
 *
 * const App = observer(() => {
 *   const { activityStore } = useStore();
 *
 *   useEffect(() => {
 *     activityStore.loadActivities();
 *   }, [activityStore]);
 *
 *   if (activityStore.loadingInitial) {
 *     return <LoadingComponent content="Loading app..." />;
 *   }
 *
 *   return <ActivityDashboard />;
 * });
 *
 * export default App;
 * ```
 */
export default observer(function ActivityDashboard(): JSX.Element {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) {
    return <LoadingComponent content="Loading app..." />;
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          <ActivityList />
        </List>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity Filters</h2>
      </Grid.Column>
    </Grid>
  );
});
