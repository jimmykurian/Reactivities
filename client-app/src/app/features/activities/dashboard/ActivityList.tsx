/**
 * @file ActivityList.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityList component.
 */

import { Header, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';
import { Fragment } from 'react/jsx-runtime';

/**
 * @component ActivityList
 * @description The ActivityList component displays a list of activities grouped by date with options to view and delete each activity.
 *
 * @returns {JSX.Element} The rendered ActivityList component.
 *
 * @remarks
 * This component maps over an array of grouped activities and displays each one with its details using Semantic UI components.
 * Each group is rendered with a header displaying the date and the activities for that date.
 * The `ActivityListItem` component is used to render individual activity items.
 * The activities are sorted by date and retrieved from the MobX store.
 *
 * @example
 * Here is an example of how to use the ActivityList component:
 * ```tsx
 * import React from 'react';
 * import { StoreProvider } from './stores/store';
 * import ActivityList from './features/activities/dashboard/ActivityList';
 *
 * const App = () => (
 *   <StoreProvider>
 *     <ActivityList />
 *   </StoreProvider>
 * );
 *
 * export default App;
 * ```
 */
export default observer(function ActivityList(): JSX.Element {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>
          <Segment>
            <Item.Group divided>
              {activities.map((activity) => (
                <ActivityListItem key={activity.id} activity={activity} />
              ))}
            </Item.Group>
          </Segment>
        </Fragment>
      ))}
    </>
  );
});
