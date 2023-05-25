import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props: { user: { username: string; secret: string; }; }) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="4dd2c849-bcb1-4f22-b3fc-796bec5d4d19"
        username={props.user.username} 
        secret={props.user.secret} 
        style={{ height: "100%" }}
      />
     <style>
        {`
        body: { background: #ccc; }
        `}
     </style>
    </div>

  );
};

export default ChatsPage;