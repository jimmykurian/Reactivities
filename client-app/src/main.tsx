/**
 * @file main.tsx
 * @author Jimmy Kurian
 * @fileoverview This file is responsible for initializing the React application and mounting it to the DOM.
 * It also provides the `store` to the `App` component using the `StoreContext.Provider`.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/layout/App';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import { StoreContext, store } from './app/stores/store';

/**
 * @description The main entry point for the React application.
 * This script renders the `App` component into the HTML element with the id `root`.
 *
 * @packageDocumentation
 * The main render function for the React application.
 * It uses `ReactDOM.createRoot` to create a root for the application and renders the `App` component within a `React.StrictMode` wrapper.
 * The `StoreContext.Provider` is used to pass the `store` to the `App` component.
 *
 * @remarks
 * The `React.StrictMode` is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.
 * The `StoreContext.Provider` provides the MobX store to the entire application, allowing any component to access the store.
 *
 * @example
 * ```tsx
 * ReactDOM.createRoot(document.getElementById('root')!).render(
 *   <React.StrictMode>
 *     <StoreContext.Provider value={store}>
 *       <App />
 *     </StoreContext.Provider>
 *   </React.StrictMode>,
 * );
 * ```
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
);

/**
 * @constant __main
 * @description A named export to include this file in TypeDoc documentation.
 */
export const __main = 'Main entry point for the React application';
