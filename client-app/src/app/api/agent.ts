/**
 * @author Jimmy Kurian
 * @name Agent
 */

import axios, { AxiosResponse } from 'axios';
import { Activity } from '../models/activity';

/**
 * Simulates a delay for a given number of milliseconds.
 *
 * @param {number} delay - The number of milliseconds to delay.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
const sleep = (delay: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

/**
 * Extracts the data from an Axios response.
 *
 * @template T - The type of the response data.
 * @param {AxiosResponse<T>} response - The Axios response.
 * @returns {T} The extracted response data.
 */
const responseBody = <T>(response: AxiosResponse<T>): T => response.data;

/**
 * An object containing methods for making HTTP requests.
 */
const requests = {
  /**
   * Makes a GET request to the specified URL.
   *
   * @template T - The type of the response data.
   * @param {string} url - The URL to send the GET request to.
   * @returns {Promise<T>} A promise that resolves to the response data.
   */
  get: <T>(url: string): Promise<T> => axios.get<T>(url).then(responseBody),

  /**
   * Makes a POST request to the specified URL with the given body.
   *
   * @template T - The type of the response data.
   * @param {string} url - The URL to send the POST request to.
   * @param {object} body - The body to include in the POST request.
   * @returns {Promise<T>} A promise that resolves to the response data.
   */
  post: <T>(url: string, body: object): Promise<T> =>
    axios.post<T>(url, body).then(responseBody),

  /**
   * Makes a PUT request to the specified URL with the given body.
   *
   * @template T - The type of the response data.
   * @param {string} url - The URL to send the PUT request to.
   * @param {object} body - The body to include in the PUT request.
   * @returns {Promise<T>} A promise that resolves to the response data.
   */
  put: <T>(url: string, body: object): Promise<T> =>
    axios.put<T>(url, body).then(responseBody),

  /**
   * Makes a DELETE request to the specified URL.
   *
   * @template T - The type of the response data.
   * @param {string} url - The URL to send the DELETE request to.
   * @returns {Promise<T>} A promise that resolves to the response data.
   */
  del: <T>(url: string): Promise<T> => axios.delete<T>(url).then(responseBody),
};

/**
 * An object containing methods for interacting with activity-related API endpoints.
 */
const Activities = {
  /**
   * Fetches the list of activities.
   *
   * @returns {Promise<Activity[]>} A promise that resolves to the list of activities.
   */
  list: (): Promise<Activity[]> => requests.get<Activity[]>('/activities'),

  /**
   * Fetches the details of a specific activity by ID.
   *
   * @param {string} id - The ID of the activity to fetch.
   * @returns {Promise<Activity>} A promise that resolves to the activity details.
   */
  details: (id: string): Promise<Activity> =>
    requests.get<Activity>(`/activities/${id}`),

  /**
   * Creates a new activity.
   *
   * @param {Activity} activity - The activity to create.
   * @returns {Promise<void>} A promise that resolves when the activity is created.
   */
  create: (activity: Activity): Promise<void> =>
    requests.post<void>('/activities', activity),

  /**
   * Updates an existing activity.
   *
   * @param {Activity} activity - The activity to update.
   * @returns {Promise<void>} A promise that resolves when the activity is updated.
   */
  update: (activity: Activity): Promise<void> =>
    requests.put<void>(`/activities/${activity.id}`, activity),

  /**
   * Deletes an activity by ID.
   *
   * @param {string} id - The ID of the activity to delete.
   * @returns {Promise<void>} A promise that resolves when the activity is deleted.
   */
  delete: (id: string): Promise<void> =>
    requests.del<void>(`/activities/${id}`),
};

/**
 * An object containing all the API interaction methods.
 */
const agent = {
  Activities,
};

export default agent;
