/**
 * @file ValidationError.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ValidationError component, which displays a list of validation errors in a user-friendly format.
 */

import { Message } from 'semantic-ui-react';

/**
 * @interface Props
 * @description The props for the ValidationError component.
 * @property {string[]} errors - An array of error messages to be displayed. Each string represents an individual error message that will be shown to the user.
 */
export interface Props {
  errors: string[];
}

/**
 * ValidationError component displays a list of error messages in a red error message box.
 * This component is primarily used for displaying form validation errors.
 *
 * @component
 * @param {Props} props - The props for the ValidationError component.
 * @returns {JSX.Element} The rendered ValidationError component.
 *
 * @example
 * ```tsx
 * <ValidationError errors={['Email is required', 'Password must be at least 6 characters']} />
 * ```
 */
export default function ValidationError({ errors }: Props): JSX.Element {
  return (
    <Message error>
      {errors && (
        <Message.List>
          {errors.map((err: string, i) => (
            <Message.Item key={i}>{err}</Message.Item>
          ))}
        </Message.List>
      )}
    </Message>
  );
}
