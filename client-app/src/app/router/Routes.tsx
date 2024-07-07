/**
 * @file Router.tsx
 * @author Jimmy Kurian
 * @fileoverview This file defines the routing configuration for the application using react-router-dom.
 */

import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';

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
 *   },
 * ];
 * ```
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
];

/**
 * @constant router
 * @description Creates a browser router using the defined routes.
 * This router is used to handle navigation and rendering of components based on the URL path.
 * @returns {BrowserRouter} A browser router instance.
 *
 * @example
 * ```tsx
 * const router = createBrowserRouter(routes);
 * ```
 */
export const router = createBrowserRouter(routes);
