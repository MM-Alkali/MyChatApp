// import { useState } from "react";

// import AuthPage from "./components/auth/auth";
// import ChatsPage from "./components/chat/chat";

// function App() {
// const [user, setUser] = useState();

// if (!user) {
//   return <AuthPage onAuth={(user) => setUser(user)} />;
// } else {
//   return <ChatsPage user={user} />;
// }
// }

// export default App;
import React, { useState } from "react";
import AuthPage from "./components/auth/auth";
import { ChatEngine, ChatEngineProps } from "react-chat-engine";
import ChatSection, {
  MessageBubble,
} from "./components/chatAttachmentButton/Chat"; // Update import statement

function App() {
  const [user, setUser] = useState();

  const renderChatFeed = (chatAppState: any) => {
    return (
      <ChatSection chatAppState={chatAppState}>
        <MessageBubble />
      </ChatSection>
    );
  };

  const renderMessageBubble = (
    creds: any,
    chat: any,
    lastMessage: any,
    message: any,
    nextMessage: any
  ) => {
    return (
      <MessageBubble
        message={message}
        lastMessage={lastMessage}
        nextMessage={nextMessage}
      />
    );
  };

  const renderNewMessageForm = (creds: any, chatId: any) => {
    return <ChatSection.NewMessage />; // Update component name
  };

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    const chatEngineProps: ChatEngineProps = {
      projectID: "4dd2c849-bcb1-4f22-b3fc-796bec5d4d19",
      userName: user.username, // Use dynamic username
      userSecret: user.secret, // Use dynamic secret
      height: "100vh",
      width: "500px",
      renderChatFeed,
      renderMessageBubble,
      renderNewMessageForm,
    };
    console.log(user.username, user.secret);

    return <ChatEngine {...chatEngineProps} />;
  }
}

export default App;

// import ChatEngine  from 'react-chat-engine';
// import ChatsPage from './components/chatPage/chatpage';
// // import { ChatFeed } from 'react-chat-engine';

// function App() {
//   // This function renders the chat engine.
//   return (
//     <>
//    <div>
//   <ChatEngine
// projectID="ebe2c0eb-8a19-408e-b8e1-456c3c86aa35"
// userName="YOUR_USERNAME"
// userSecret="hereismysecret"
//     key="ChatEngine"
//     renderChatHeader={() => <h1>My Chat Header</h1>}
//     renderMessageBubble={(message:any) => (
//       <div className="message">
//         {message.text}
//       </div>
//     )}
//     renderChatFooter={() => <h1>My Chat Footer</h1>}
//   />
//   <ChatsPage {...ChatEngine} />
// </div>
//     </>
//   );
// }

// export default App;

// {/* <>
// <div>
//        <ChatEngine
//      projectID="ebe2c0eb-8a19-408e-b8e1-456c3c86aa35"
//      userName="YOUR_USERNAME"
//      userSecret="hereismysecret"
//          renderChatHeader={() => <h1>My Chat Header</h1>}
//          renderMessageBubble={(message:any) => (
//            <div className="message">
//              {message.text}
//            </div>
//          )}
//          renderChatFooter={() => <h1>My Chat Footer</h1>}
//        />
//        <ChatsPage {...ChatEngine}
//        />
//      </div>

//    </> */}
