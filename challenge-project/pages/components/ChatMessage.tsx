import MetaData from "./MetaData";
interface ChatMessageProps {
  chat: IMsg;
  displayName: string | null;
  i: number;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ displayName, chat, i }) => {

  return (
    <div key={"msg_" + i}>
      <span>{chat.user === displayName ? "Me" : chat.user}</span>: {chat.msg}
      {chat.finalData ? <MetaData metaData={chat.finalData}/> : null}
    </div>
  );
};

export default ChatMessage;
