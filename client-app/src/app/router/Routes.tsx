/**
 * @file Routes.tsx
 * @author Jimmy Kurian
 * @fileoverview This file defines the routing configuration for the application using react-router-dom.
 */

import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
import HomePage from '../features/home/HomePage';
import ActivityForm from '../features/activities/form/ActivityForm';
import ActivityDetails from '../features/activities/details/ActivityDetails';

/**
 * @constant routes
 * @description An array of route objects defining the routes for the application.
 * Each route object contains a path and the corresponding component to render.
 * @type {RouteObject[]}
 *
 * @example
 * ```tsx
 * const routes: RouteObject[] = [
 *   {
 *     path: '/',
 *     element: <App />,
 *     children: [
 *       { path: '', element: <HomePage /> },
 *       { path: 'activities', element: <ActivityDashboard /> },
 *       { path: 'activities/:id', element: <ActivityDetails /> },
 *       { path: 'createActivity', element: <ActivityForm /> },
 *       { path: 'manage/:id', element: <ActivityForm /> },
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
      { path: '', element: <HomePage /> },
      { path: 'activities', element: <ActivityDashboard /> },
      { path: 'activities/:id', element: <ActivityDetails /> },
      { path: 'createActivity', element: <ActivityForm /> },
      { path: 'manage/:id', element: <ActivityForm /> },
    ],
  },
];

/**
 * @constant router
 * @description Creates a browser router using the defined routes.
 * This router is used to handle navigation and rendering of components based on the URL path.
 * @type {ReturnType<typeof createBrowserRouter>}
 *
 * @example
 * ```tsx
 * const router = createBrowserRouter(routes);
 * ```
 */
export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes);
