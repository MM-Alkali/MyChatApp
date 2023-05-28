import React, { useState } from "react";
import "./chatpage.css";
import arrowImage from "./assets/arrow-up.png";
import { sendMessage } from "react-chat-engine";

interface MessageBubbleProps {
  message: any;
  lastMessage: any;
  nextMessage: any;
}

interface NewMessageProps {
  chatId: string;
}

export const ChatSection: React.FC = () => {
  return (
    <section className="msger">
      <main className="msger-chat"></main>
    </section>
  );
};

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  lastMessage,
  nextMessage,
}) => {
  const { sender, timestamp, text } = message;
  const isCurrentUser = sender.username === "YOUR_USERNAME";
  const msgBubbleClass = isCurrentUser ? "msg right-msg" : "msg left-msg";
  const msgInfoClass = isCurrentUser ? "msg-info right" : "msg-info left";

  return (
    <div className="msger-chat">
      <div className={msgBubbleClass}>
        <div
          className="msg-img"
          style={{
            backgroundImage:
              "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
          }}
        />
        <div className="msg-bubble">
          <div className={msgInfoClass}>
            <div className="msg-info-name">{sender.username}</div>
            <div className="msg-info-time">{timestamp}</div>
          </div>
          <div className="msg-text">{text}</div>
        </div>
      </div>
    </div>
  );
};

const NewMessage: React.FC<NewMessageProps> = ({ chatId }) => {
  const [message, setMessage] = useState("");

  const handleMessageSend = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim() === "") {
      return; // Don't send empty messages
    }

    sendMessage(chatId, { text: message }, () => {
      // Callback function after the message is sent
      console.log("Message sent:", message);
    });

    setMessage(""); // Reset the message input after sending
  };

  return (
    <form className="msger-inputarea" onSubmit={handleMessageSend}>
      <div>
        <input
          type="text"
          className="msger-input"
          placeholder="Type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="imageArrow" type="submit">
          <img src={arrowImage} alt="Arrow-up" />
        </button>
      </div>
    </form>
  );
};

export default NewMessage;
