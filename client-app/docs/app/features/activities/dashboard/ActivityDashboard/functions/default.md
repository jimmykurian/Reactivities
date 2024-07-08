[**Client App Documentation v0.0.0**](../../../../../../README.md) • **Docs**

***

[Client App Documentation v0.0.0](../../../../../../README.md) / [app/features/activities/dashboard/ActivityDashboard](../README.md) / default

# Function: default()

> **default**(`props`, `deprecatedLegacyContext`?): `ReactNode`

## Parameters

• **props**: `object`

• **deprecatedLegacyContext?**: `any`

**Deprecated**

**See**

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods)

## Returns

`ReactNode`

The rendered ActivityDashboard component.

## Component

ActivityDashboard

## Description

The ActivityDashboard component displays a list of activities and their details or a form for editing/creating activities.

## Remarks

This component serves as the main dashboard for managing activities. It conditionally renders the `ActivityList`, `ActivityDetails`,
and `ActivityForm` components based on the state from the MobX store. If the activities are still loading, it displays a LoadingComponent.

## Example

```tsx
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from './stores/store';
import ActivityDashboard from './features/activities/dashboard/ActivityDashboard';

const App = observer(() => {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) {
    return <LoadingComponent content="Loading app..." />;
  }

  return <ActivityDashboard />;
});

export default App;
```

## Source

[src/app/features/activities/dashboard/ActivityDashboard.tsx:52](https://github.com/jimmykurian/Reactivities/blob/ab68919949da6f10746423fc739292afd2dfa6f7/client-app/src/app/features/activities/dashboard/ActivityDashboard.tsx#L52)
