/**
 * @author Jimmy Kurian
 * @name Main
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/layout/App';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';

/**
 * The main entry point for the React application.
 * This script renders the `App` component into the HTML element with the id `root`.
 *
 * @remarks
 * This file is responsible for initializing the React application and mounting it to the DOM.
 *
 * @packageDocumentation
 */

/**
 * The main render function for the React application.
 * It uses `ReactDOM.createRoot` to create a root for the application and renders the `App` component within a `React.StrictMode` wrapper.
 *
 * @remarks
 * The `React.StrictMode` is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.
 *
 * @example
 * ```tsx
 * ReactDOM.createRoot(document.getElementById('root')!).render(
 *   <React.StrictMode>
 *     <App />
 *   </React.StrictMode>,
 * );
 * ```
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

/**
 * A named export to include this file in TypeDoc documentation.
 */
export const __main = 'Main entry point for the React application';
