import React from "react";
import Styles from "./ChatCard.module.css";

const ChatCard = ({ type, text }) => {
  if (type === "User") {
    return (
      <div className={Styles.ChatCardContainer}>
        <span>{text}</span>
      </div>
    );
  } else {
    return (
      <div className={Styles.ChatCardContainer} id={Styles.SystemReply}>
        <span>
          {text}
        </span>
      </div>
    );
  }
};

export default ChatCard;
