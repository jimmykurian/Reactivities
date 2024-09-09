/**
 * @file CommonStore.ts
 * @author Jimmy Kurian
 * @fileoverview This file contains the MobX store class `CommonStore`, which is responsible for managing common application state,
 * specifically handling server errors throughout the Reactivities application.
 */

import { makeAutoObservable } from 'mobx';
import { ServerError } from '../models/serverError';

/**
 * CommonStore class manages common application-wide state, including server error handling.
 * This store is made observable using MobX, allowing components to reactively update based on changes to the store's state.
 *
 * @class
 */
export default class CommonStore {
  /**
   * Represents the server error state, initially set to null.
   * The `ServerError` model contains the error message and optional stack trace details.
   *
   * @type {ServerError | null}
   */
  error: ServerError | null = null;

  /**
   * Initializes a new instance of the `CommonStore` class and makes it observable using MobX.
   */
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Sets the server error state in the store.
   *
   * @param {ServerError} error - The server error object containing details of the error.
   */
  setServerError = (error: ServerError) => {
    this.error = error;
  };
}
