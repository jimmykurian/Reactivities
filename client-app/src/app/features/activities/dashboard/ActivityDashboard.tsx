/**
 * @file ActivityDashboard.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityDashboard component which serves as the main dashboard for managing activities.
 * It conditionally renders the ActivityList, ActivityDetails, and ActivityForm components based on the state from the MobX store.
 * If activities are still loading, it displays the LoadingComponent.
 */

import { Grid, List } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import LoadingComponent from '../../../layout/LoadingComponent';

/**
 * @component ActivityDashboard
 * @description The ActivityDashboard component displays a list of activities and their details or a form for editing/creating activities.
 *
 * @returns {JSX.Element} The rendered ActivityDashboard component.
 *
 * @remarks
 * This component serves as the main dashboard for managing activities. It conditionally renders the `ActivityList`, `ActivityDetails`,
 * and `ActivityForm` components based on the state from the MobX store. If the activities are still loading, it displays a LoadingComponent.
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
  const { selectedActivity, editMode } = activityStore;

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
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
});
