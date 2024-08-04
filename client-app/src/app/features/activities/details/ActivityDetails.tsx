/**
 * @file ActivityDetails.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityDetails component.
 */

import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../stores/store';
import LoadingComponent from '../../../layout/LoadingComponent';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';

/**
 * @component ActivityDetails
 * @description A functional component that displays the details of an activity.
 *
 * @returns {JSX.Element} The JSX element representing the activity details.
 *
 * @remarks
 * This component uses the Semantic UI React library to create a layout for displaying detailed information about an activity.
 * It includes a header, detailed information, a chat section, and a sidebar.
 * The `loadActivity` function is called to fetch the activity details based on the ID from the URL parameters.
 * The component accesses the `activityStore` from the MobX store context to get the selected activity and relevant functions.
 * The `LoadingComponent` is displayed while the activity details are being loaded.
 *
 * @example
 * Here is an example of how to use the ActivityDetails component:
 * ```tsx
 * import React from 'react';
 * import ActivityDetails from './features/activities/details/ActivityDetails';
 * import { BrowserRouter as Router, Route } from 'react-router-dom';
 * import { StoreProvider } from './stores/store';
 *
 * const App = () => (
 *   <StoreProvider>
 *     <Router>
 *       <Route path="/activities/:id" component={ActivityDetails} />
 *     </Router>
 *   </StoreProvider>
 * );
 *
 * export default App;
 * ```
 */
export default observer(function ActivityDetails(): JSX.Element {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity)
    return <LoadingComponent content="Loading app..." />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailedSidebar />
      </Grid.Column>
    </Grid>
  );
});
