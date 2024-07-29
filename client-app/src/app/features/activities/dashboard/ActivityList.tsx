/**
 * @file ActivityList.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityList component.
 */

import { Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';

/**
 * @component ActivityList
 * @description The ActivityList component displays a list of activities with options to view and delete each activity.
 *
 * @returns {JSX.Element} The rendered ActivityList component.
 *
 * @remarks
 * This component maps over an array of activities and displays each one with its details using Semantic UI components.
 * Each activity includes a title, date, description, city, venue, and category, along with "View" and "Delete" buttons.
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
 * const activities = [
 *   { id: '1', title: 'Activity 1', date: '2023-12-31', description: 'Description 1', category: 'Category 1', city: 'City 1', venue: 'Venue 1' },
 *   { id: '2', title: 'Activity 2', date: '2024-01-01', description: 'Description 2', category: 'Category 2', city: 'City 2', venue: 'Venue 2' },
 * ];
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
  const { activitiesByDate } = activityStore;

  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map((activity) => (
          <ActivityListItem key={activity.id} activity={activity} />
        ))}
      </Item.Group>
    </Segment>
  );
});
