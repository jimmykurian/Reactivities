/**
 * @file ActivityDetailedChat.tsx
 * @author Jimmy Kurian
 * @fileoverview This file contains the ActivityDetailedChat component that displays the chat section for an activity's details page.
 */

import { observer } from 'mobx-react-lite';
import { Segment, Header, Comment, Form, Button } from 'semantic-ui-react';

/**
 * @component ActivityDetailedChat
 * @description The ActivityDetailedChat component renders a chat interface for users to discuss the event. It includes a list of comments and a form to add new replies.
 *
 * @returns {JSX.Element} The rendered ActivityDetailedChat component.
 *
 * @remarks
 * This component uses Semantic UI React components to create a chat interface. It displays a header, a list of comments, and a form for adding new replies. Each comment includes an avatar, author, metadata, text, and actions for replying.
 *
 * @example
 * Here is an example of how to use the ActivityDetailedChat component:
 * ```tsx
 * import React from 'react';
 * import ActivityDetailedChat from './features/activities/details/ActivityDetailedChat';
 *
 * const App = () => (
 *   <div>
 *     <ActivityDetailedChat />
 *   </div>
 * );
 *
 * export default App;
 * ```
 */
export default observer(function ActivityDetailedChat(): JSX.Element {
  return (
    <>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="teal"
        style={{ border: 'none' }}
      >
        <Header>Chat about this event</Header>
      </Segment>
      <Segment attached>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src="/assets/user.png" />
            <Comment.Content>
              <Comment.Author as="a">Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <div>5 days ago</div>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </Segment>
    </>
  );
});
