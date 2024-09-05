/**
 * @file agent.ts
 * @author Jimmy Kurian
 * @fileoverview This module provides an API client for interacting with activity-related endpoints using axios.
 */

import axios, { AxiosError, AxiosResponse } from 'axios';
import { Activity } from '../models/activity';
import { toast } from 'react-toastify';
import { router } from '../router/Routes';

/**
 * @module Agent
 * @description This module provides an API client for interacting with activity-related endpoints using axios.
 * It includes methods for performing CRUD operations on activities and simulates network delay for responses.
 */

/**
 * @constant sleep
 * @description The sleep function that simulates network delay.
 * @param {number} delay - The number of milliseconds to delay.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
const sleep = (delay: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(
  async (response) => {
    await sleep(1000);
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        } else {
          toast.error(data);
        }
        break;
      case 401:
        toast.error('Unauthorized');
        break;
      case 403:
        toast.error('Forbidden');
        break;
      case 404:
        router.navigate('/not-found');
        break;
      case 500:
        toast.error('Server Error');
        break;
    }
    return Promise.reject(error);
  },
);

/**
 * @constant responseBody
 * @description Extracts the data from an Axios response.
 * @template T - The type of the response data.
 * @param {AxiosResponse<T>} response - The Axios response.
 * @returns {T} The extracted response data.
 */
const responseBody = <T>(response: AxiosResponse<T>): T => response.data;

/**
 * @constant requests
 * @description An object containing methods for making HTTP requests.
 */
const requests = {
  /**
   * @description Makes a GET request to the specified URL.
   * @template T - The type of the response data.
   * @param {string} url - The URL to send the GET request to.
   * @returns {Promise<T>} A promise that resolves to the response data.
   */
  get: <T>(url: string): Promise<T> => axios.get<T>(url).then(responseBody),

  /**
   * @description Makes a POST request to the specified URL with the given body.
   * @template T - The type of the response data.
   * @param {string} url - The URL to send the POST request to.
   * @param {object} body - The body to include in the POST request.
   * @returns {Promise<T>} A promise that resolves to the response data.
   */
  post: <T>(url: string, body: object): Promise<T> =>
    axios.post<T>(url, body).then(responseBody),

  /**
   * @description Makes a PUT request to the specified URL with the given body.
   * @template T - The type of the response data.
   * @param {string} url - The URL to send the PUT request to.
   * @param {object} body - The body to include in the PUT request.
   * @returns {Promise<T>} A promise that resolves to the response data.
   */
  put: <T>(url: string, body: object): Promise<T> =>
    axios.put<T>(url, body).then(responseBody),

  /**
   * @description Makes a DELETE request to the specified URL.
   * @template T - The type of the response data.
   * @param {string} url - The URL to send the DELETE request to.
   * @returns {Promise<T>} A promise that resolves to the response data.
   */
  del: <T>(url: string): Promise<T> => axios.delete<T>(url).then(responseBody),
};

/**
 * @constant Activities
 * @description An object containing methods for interacting with activity-related API endpoints.
 */
const Activities = {
  /**
   * @description Fetches the list of activities.
   * @returns {Promise<Activity[]>} A promise that resolves to the list of activities.
   */
  list: (): Promise<Activity[]> => requests.get<Activity[]>('/activities'),

  /**
   * @description Fetches the details of a specific activity by ID.
   * @param {string} id - The ID of the activity to fetch.
   * @returns {Promise<Activity>} A promise that resolves to the activity details.
   */
  details: (id: string): Promise<Activity> =>
    requests.get<Activity>(`/activities/${id}`),

  /**
   * @description Creates a new activity.
   * @param {Activity} activity - The activity to create.
   * @returns {Promise<void>} A promise that resolves when the activity is created.
   */
  create: (activity: Activity): Promise<void> =>
    requests.post<void>('/activities', activity),

  /**
   * @description Updates an existing activity.
   * @param {Activity} activity - The activity to update.
   * @returns {Promise<void>} A promise that resolves when the activity is updated.
   */
  update: (activity: Activity): Promise<void> =>
    requests.put<void>(`/activities/${activity.id}`, activity),

  /**
   * @description Deletes an activity by ID.
   * @param {string} id - The ID of the activity to delete.
   * @returns {Promise<void>} A promise that resolves when the activity is deleted.
   */
  delete: (id: string): Promise<void> =>
    requests.del<void>(`/activities/${id}`),
};

/**
 * @constant agent
 * @description An object containing all the API interaction methods.
 */
const agent = {
  Activities,
};

export default agent;
