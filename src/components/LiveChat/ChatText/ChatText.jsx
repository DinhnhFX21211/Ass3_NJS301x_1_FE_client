import React, { useEffect, useRef } from "react";
import styles from "./ChatText.module.css";

function ChatText(props) {
  const { chatsText } = props;
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [props]);
  const scroll = useRef();
  return (
    <div className={`${styles.container}`}>
      {chatsText.length === 0 && (
        <p>Please Login to Start your chat with supporter</p>
      )}
      {chatsText.length > 0 && (
        <>
          {chatsText.map((objMess, index) => (
            <div
              ref={scroll}
              key={index}
              className={
                objMess.from === "client" ? styles.guest : styles.admin
              }
            >
              <p>{objMess.text}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ChatText;
