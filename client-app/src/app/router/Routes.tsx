/**
 * @file Routes.tsx
 * @author Jimmy Kurian
 * @fileoverview This file defines the routing configuration for the application using react-router-dom.
 */

import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../features/activities/form/ActivityForm';
import ActivityDetails from '../features/activities/details/ActivityDetails';
import TestErrors from '../features/errors/TestErrors';
import NotFound from '../features/errors/NotFound';
import ServerError from '../features/errors/ServerError';

/**
 * @constant routes
 * @description An array of route objects defining the routes for the application.
 * Each route object contains a path and the corresponding component to render.
 * The routes include paths for the activity dashboard, activity details, and activity form.
 * The ActivityForm component is used for both creating and managing activities.
 * The `key` prop is used to differentiate between the create and manage routes for the ActivityForm component.
 * @type {RouteObject[]}
 *
 * @example
 * ```tsx
 * const routes: RouteObject[] = [
 *   {
 *     path: '/',
 *     element: <App />,
 *     children: [
 *       { path: 'activities', element: <ActivityDashboard /> },
 *       { path: 'activities/:id', element: <ActivityDetails /> },
 *       { path: 'createActivity', element: <ActivityForm key="create" /> },
 *       { path: 'manage/:id', element: <ActivityForm key="manage" /> },
 *     ],
 *   },
 * ];
 * ```
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'activities', element: <ActivityDashboard /> },
      { path: 'activities/:id', element: <ActivityDetails /> },
      { path: 'createActivity', element: <ActivityForm key="create" /> },
      { path: 'manage/:id', element: <ActivityForm key="manage" /> },
      { path: 'errors', element: <TestErrors /> },
      { path: 'not-found', element: <NotFound /> },
      { path: 'server-error', element: <ServerError /> },
      { path: '*', element: <Navigate replace to="/not-found" /> },
    ],
  },
];

/**
 * @constant router
 * @description Creates a browser router using the defined routes.
 * This router is used to handle navigation and rendering of components based on the URL path.
 * The router enables single-page application (SPA) behavior by updating the URL and rendering the corresponding components without reloading the page.
 * @type {ReturnType<typeof createBrowserRouter>}
 *
 * @example
 * ```tsx
 * const router = createBrowserRouter(routes);
 * ```
 */
export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes);
