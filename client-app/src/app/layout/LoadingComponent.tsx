/**
 * @file LoadingComponent.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the LoadingComponent component which renders a loading indicator with an optional message.
 */

import { Dimmer, Loader } from 'semantic-ui-react';

/**
 * @interface Props
 * @description Props interface for the LoadingComponent.
 *
 * @property {boolean} [inverted=true] - Whether the dimmer is inverted (dark background with light content).
 * @property {string} [content='Loading...'] - The loading message to be displayed.
 */
export interface Props {
  inverted?: boolean;
  content?: string;
}

/**
 * @component LoadingComponent
 * @description LoadingComponent renders a loading indicator with an optional message.
 *
 * @param {Props} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered LoadingComponent.
 *
 * @remarks
 * This component utilizes the `Dimmer` and `Loader` components from the Semantic UI React library.
 * The `inverted` prop controls the background and content color scheme, and the `content` prop allows for a customizable loading message.
 *
 * @example
 * ```tsx
 * <LoadingComponent inverted={false} content="Please wait..." />
 * ```
 */
export default function LoadingComponent({
  inverted = true,
  content = 'Loading...',
}: Props): JSX.Element {
  return (
    <Dimmer active={true} inverted={inverted} data-testid="dimmer">
      <Loader content={content} />
    </Dimmer>
  );
}
