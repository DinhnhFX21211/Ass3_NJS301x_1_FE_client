import React, { useEffect, useState } from "react";
import styles from "./LiveChatModal.module.css";
import ReactDOM from "react-dom";
import TopBar from "../TopBar/TopBar";
import ChatText from "../ChatText/ChatText";
import ChatInput from "../ChatInput/ChatInput";
import openSocket from "socket.io-client";
import { socket } from "../../../socket";
import { useSelector } from "react-redux";
import { MessageAPI } from "../../../apis/messageAPIs";
import { useNavigate } from "react-router-dom";
import { URL } from "../../../stores/deployUrl";
function LiveChatModal(props) {
  const { currentUser } = useSelector((state) => state.auth);
  localStorage.setItem("roomId", currentUser?._id || []);
  const roomId = localStorage.getItem("roomId") || null;
  const [chatsText, setChatsText] = useState([]);
  const [showLiveChat, setShowLiveChat] = useState(true);
  const navigate = useNavigate();
  const fetchMessage = async () => {
    const res = await MessageAPI.getMessageUser(roomId);
    if (res.status === 200) {
      setChatsText(res.data);
    }
  };
  useEffect(() => {
    fetchMessage();
  }, []);

  useEffect(() => {
    function getMessageFromServer(value) {
      if (roomId && roomId === value.roomId) {
        if (value.type === "end") {
          setChatsText((prev) => {
            const updatedList = [...prev];
            updatedList.push({ from: "end" });
            return updatedList;
          });
          localStorage.removeItem("roomId");
        } else {
          setChatsText((prev) => {
            const updatedList = [...prev];
            updatedList.push(value.message);
            return updatedList;
          });
        }
      }
    }
    socket.on("chat", getMessageFromServer);

    return () => {
      socket.off("chat", getMessageFromServer);
    };
  }, []);

  const handleSubmitChat = (message) => {
    const socket = openSocket(URL);
    const roomChatId = localStorage.getItem("roomId");
    let objMess;

    if (!roomChatId) {
      navigate("/login");
    } else {
      if (message === "/end") {
        setShowLiveChat(false);
      } else {
        objMess = {
          type: "update",
          roomId: roomChatId,
          message: { from: "client", text: message },
        };
        socket.emit("chat", objMess);
      }
    }
  };

  return (
    <div className={showLiveChat ? styles.container : styles.hide}>
      <TopBar />
      <ChatText chatsText={chatsText} />
      <div className={`${styles["chat-input"]}`}>
        <ChatInput onSubmitChat={handleSubmitChat} />
      </div>
    </div>
  );
}

function ModalLiveChatContainer(props) {
  return ReactDOM.createPortal(
    <LiveChatModal />,
    document.getElementById("root-modal")
  );
}

export default ModalLiveChatContainer;
