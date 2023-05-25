import { useState } from "react";

import AuthPage from "./components/auth/auth";
import ChatsPage from "./components/chat/chat";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
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
//     projectID="ebe2c0eb-8a19-408e-b8e1-456c3c86aa35"
//     userName="YOUR_USERNAME"
//     userSecret="hereismysecret"
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