/**
 * @file ServerError.ts
 * @author Jimmy Kurian
 * @fileoverview This file defines the `ServerError` interface, which models the structure of server error responses in the Reactivities application.
 */

/**
 * The ServerError interface represents the structure of an error returned from the server.
 * It includes the HTTP status code, an error message, and optional detailed information about the error.
 *
 * @interface ServerError
 *
 * @property {number} statusCode - The HTTP status code associated with the error.
 * @property {string} message - A brief message describing the error.
 * @property {string} details - Additional details or stack trace information about the error (optional).
 */
export interface ServerError {
  statusCode: number;
  message: string;
  details: string;
}
