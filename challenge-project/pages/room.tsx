import React, { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import {
  connect,
  disconnect,
  receive,
} from "../store/slices/conversationSlice";
import { io } from "socket.io-client";
import { sendIMessage } from "../utils/messages";
import ChatMessage from "./components/ChatMessage";

const Room: React.FC = () => {
  const inputRef = useRef(null);
  const dispatch = useAppDispatch();

  // migrate to reducers
  let { displayName } = useAppSelector((state) => state.user);
  const { chat, connected } = useAppSelector((state) => state.conversations);

  const [msg, setMsg] = useState("");

  useEffect((): any => {
    const url = process.env.NEXT_BASE_URL as string | "";
    // connect to socket server
    const socket = io(url, {
      path: "/api/socketio",
    });

    // log socket connection
    socket.on("connect", () => {
      dispatch(connect(socket.id));
    });

    //updates chat on message dispatch
    socket.on("message", (message: IMsg) => {
      dispatch(receive(message));
    });

    //server disconnect on unmount
    if (socket) return () => dispatch(disconnect(socket));
  }, []);

  const sendMessage = async () => {
    if (displayName && msg) {
      sendIMessage({ user: displayName, msg });
      setMsg("");
    }
  };

  return (
    <div>
      <div>
        <div>
          {chat.length ? (
            chat.map((chat, i) => (
              <ChatMessage
                chat={chat}
                displayName={displayName}
                i={i}
              />
            ))
          ) : (
            <div>No chat messages</div>
          )}
        </div>
        <div>
          <div>
            <div>
              <input
                ref={inputRef}
                type="text"
                value={msg}
                placeholder={connected ? "Type a message..." : "Connecting..."}
                disabled={!connected}
                onChange={(event) => {
                  setMsg(event.target.value);
                }}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    sendMessage();
                  }
                }}
              />
            </div>
            <div>
              <button onClick={sendMessage} disabled={!connected}>
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
