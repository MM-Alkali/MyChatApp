/*=====================Pretty========================*/
// import { useState } from "react";

// import AuthPage from "./src/components/auth.page/authpage";
// import ChatsPage from "./src/components/chat.page/chatpage";

// function App() {
//   const [user, setUser] = useState();

//   if (!user) {
//     return <AuthPage onAuth={(user) => setUser(user)} />;
//   } else {
//     return <ChatsPage user={user} />;
//   }
// }

// export default App;

/*==================Chat Engine===================*/

// import { ChatEngine } from 'react-chat-engine';

// function App() {
// 	return (
// 		<ChatEngine
// 			projectID='00000000-0000-0000-0000-000000000000'
// 			userName='adam'
// 			userSecret='pass1234'
// 		/>
// 	);
// }

// export default App;

/*===================Static Chat Page=====================*/

// import React, { useEffect, useState } from 'react';
// import { ChatEngine, useChatContext } from 'react-chat-engine';

// const ChatPage: React.FC = () => {
//   const { messages, sendMessage } = useChatContext();
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {

//     const messageList = document.getElementById('message-list');
//     if (messageList) {
//       messageList.scrollTop = messageList.scrollHeight;
//     }
//   }, [messages]);

//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (newMessage.trim() === '') return;
//     sendMessage({ text: newMessage });
//     setNewMessage('');
//   };

//   return (
//     <div className="chat-page">
//       <div id="message-list" className="message-list">
//         {messages.map(({message}: any) => (
//           <div key={message.id} className="message">
//             <div className="message-sender">{message.sender.username}</div>
//             <div className="message-text">{message.text}</div>
//           </div>
//         ))}
//       </div>
//       <form className="message-input" onSubmit={handleSendMessage}>
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <ChatEngine
//       projectID="ebe2c0eb-8a19-408e-b8e1-456c3c86aa35"
//       userName="YOUR_USERNAME"
//       userSecret="hereismysecret"
//       renderChatFeed={({chatAppProps}: any) => <ChatPage {...chatAppProps} />}
//     />
//   );
// };

// export default App;
