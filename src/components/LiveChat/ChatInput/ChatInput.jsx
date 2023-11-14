import React from "react";
import styles from "./ChatInput.module.css";
import { Form } from "react-router-dom";

function ChatInput(props) {
  const { onSubmitChat } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    onSubmitChat(formProps.message);
    event.target.reset();
  };
  return (
    <Form onSubmit={handleSubmit} className={styles.container}>
      <i className="fa-regular fa-circle-user fa-2xl"></i>
      <input type="text" name="message" placeholder="Enter message!" />
      <div className={styles.actions}>
        <i className="fa-solid fa-paperclip"></i>
        <i className="fa-solid fa-face-smile"></i>
        <button type="submit">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </Form>
  );
}

export default ChatInput;
