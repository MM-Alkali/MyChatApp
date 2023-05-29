// import React from "react";
// import { PrettyChatWindow } from "react-chat-engine-pretty";

// interface ChatsPageProps {
//   user: {
//     username: string;
//     secret: string;
//   };
// }

// const ChatsPage: React.FC<ChatsPageProps> = (props) => {
//   return (
//     <div style={{ height: "100vh" }}>
//       <PrettyChatWindow
//         projectId="4dd2c849-bcb1-4f22-b3fc-796bec5d4d19"
//         username={props.user.username}
//         secret={props.user.secret}
//         style={{ height: "100%" }}
//       />
//     </div>
//   );
// };

// export default ChatsPage;

import React from "react";
import "./chatpage.css";
import arrowImage from "./assets/arrow-up.png";

interface ChatsPageProps {
  user: {
    username: string;
    secret: string;
  };
}

const ChatsPage: React.FC<ChatsPageProps> = () => {
  return (
    <section className="msger">
      <main className="msger-chat">
        <div className="msg left-msg">
          <div
            className="msg-img"
            style={{
              backgroundImage:
                "url(https://image.flaticon.com/icons/svg/327/327779.svg)",
            }}
          />
          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">BOT</div>
              <div className="msg-info-time">12:45</div>
            </div>
            <div className="msg-text">
              Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
            </div>
          </div>
        </div>
        <div className="msg right-msg">
          <div
            className="msg-img"
            style={{
              backgroundImage:
                "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
            }}
          />
          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">Sajad</div>
              <div className="msg-info-time">12:46</div>
            </div>
            <div className="msg-text">
              You can change your name in JS section!
            </div>
          </div>
        </div>
      </main>
      <form className="msger-inputarea">
        <div>
          <input
            type="text"
            className="msger-input"
            placeholder="Type your question here"
          />
          <img className="imageArrow" src={arrowImage} alt="Arrow-up" />
        </div>
      </form>
    </section>
  );
};

export default ChatsPage;
