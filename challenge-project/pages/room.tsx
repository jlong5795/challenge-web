import React, { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import {
  connect,
  disconnect,
  receive,
  send,
} from "../store/slices/conversationSlice";
import { io } from "socket.io-client";

// placeholder for current user
const user = "User_" + String(new Date().getTime()).substr(-3);

const Room: React.FC = () => {
  const inputRef = useRef(null);
  const dispatch = useAppDispatch();

  // migrate to reducers
  const { chat, connected } = useAppSelector((state) => state.conversations);

  const [msg, setMsg] = useState("");

  useEffect((): any => {
    // the body of this should be pulled into helper file
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
    dispatch(send({ user, msg }));
    setMsg("");
  };

  return (
    <div>
      <div>
        <div>
          {chat.length ? (
            chat.map((chat, i) => (
              <div key={"msg_" + i}>
                <span>{chat.user === user ? "Me" : chat.user}</span>: {chat.msg}
              </div>
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
