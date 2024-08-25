/**
 * @file TestErrors.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the TestErrors component which is used to test error handling in the application.
 */

import { Button, Header, Segment } from 'semantic-ui-react';
import axios from 'axios';

/**
 * TestErrors component provides buttons to trigger various types of HTTP errors for testing purposes.
 * Each button triggers a specific HTTP request to test how the application handles different error responses.
 *
 * @component
 * @returns {JSX.Element} The rendered TestErrors component.
 */
export default function TestErrors() {
  const baseUrl = 'http://localhost:5000/api/';

  /**
   * Handles a 404 Not Found error by sending a GET request to a non-existent endpoint.
   */
  function handleNotFound() {
    axios
      .get(baseUrl + 'buggy/not-found')
      .catch((err) => console.log(err.response));
  }

  /**
   * Handles a 400 Bad Request error by sending a GET request that results in a client error.
   */
  function handleBadRequest() {
    axios
      .get(baseUrl + 'buggy/bad-request')
      .catch((err) => console.log(err.response));
  }

  /**
   * Handles a 500 Server Error by sending a GET request to trigger a server error.
   */
  function handleServerError() {
    axios
      .get(baseUrl + 'buggy/server-error')
      .catch((err) => console.log(err.response));
  }

  /**
   * Handles a 401 Unauthorized error by sending a GET request without proper authorization.
   */
  function handleUnauthorised() {
    axios
      .get(baseUrl + 'buggy/unauthorised')
      .catch((err) => console.log(err.response));
  }

  /**
   * Handles an error for a bad GUID format by sending a GET request with an invalid identifier.
   */
  function handleBadGuid() {
    axios
      .get(baseUrl + 'activities/notaguid')
      .catch((err) => console.log(err.response));
  }

  /**
   * Handles validation errors by sending a POST request with invalid data to trigger validation error responses.
   */
  function handleValidationError() {
    axios
      .post(baseUrl + 'activities', {})
      .catch((err) => console.log(err.response));
  }

  return (
    <>
      <Header as="h1" content="Test Error component" />
      <Segment>
        <Button.Group widths="7">
          <Button onClick={handleNotFound} content="Not Found" basic primary />
          <Button
            onClick={handleBadRequest}
            content="Bad Request"
            basic
            primary
          />
          <Button
            onClick={handleValidationError}
            content="Validation Error"
            basic
            primary
          />
          <Button
            onClick={handleServerError}
            content="Server Error"
            basic
            primary
          />
          <Button
            onClick={handleUnauthorised}
            content="Unauthorised"
            basic
            primary
          />
          <Button onClick={handleBadGuid} content="Bad Guid" basic primary />
        </Button.Group>
      </Segment>
    </>
  );
}
