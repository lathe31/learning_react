import React from "react";
import "./ChatBox.css";
import ChatCard from "./ChatCard/ChatCard";

const ChatBox = () => {
  return (
    <div className="ChatWindowContainer">
      <ChatCard />
      <span>
        <input type="text" name="" id="inputField" />
      </span>
    </div>
  );
};

export default ChatBox;
