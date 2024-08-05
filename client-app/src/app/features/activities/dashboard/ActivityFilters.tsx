/**
 * @file ActivityFilters.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityFilters component that provides filtering options and a calendar for activities.
 */

import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';

/**
 * @component ActivityFilters
 * @description The ActivityFilters component renders a vertical menu with filtering options for activities and a calendar.
 *
 * @returns {JSX.Element} The rendered ActivityFilters component.
 *
 * @remarks
 * This component uses Semantic UI React components to create a vertical menu with options to filter activities by all activities, activities the user is going to, and activities the user is hosting. It also includes a calendar component for selecting dates.
 *
 * @example
 * Here is an example of how to use the ActivityFilters component:
 * ```tsx
 * import React from 'react';
 * import ActivityFilters from './features/activities/dashboard/ActivityFilters';
 *
 * const App = () => (
 *   <div>
 *     <ActivityFilters />
 *   </div>
 * );
 *
 * export default App;
 * ```
 */
export default function ActivityFilters(): JSX.Element {
  return (
    <>
      <Menu vertical size="large" style={{ width: '100%', marginTop: 25 }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item content="All Activities" />
        <Menu.Item content="I'm going" />
        <Menu.Item content="I'm hosting" />
      </Menu>
      <Header />
      <Calendar />
    </>
  );
}
