import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import icon from "../../Assets/Images/anim.png";
import Styles from "./ChatBox.module.css";
import ChatCard from "./ChatCard/ChatCard";

const ChatBox = ({
  show,
  toogleChatWindow,
  chatList,
  userInputHandle,
  handleSubmit,
  userText
}) => {
  if (show) {
    return (
      <Slide bottom>
        <div className={Styles.ChatWindowContainer}>
          <span className={Styles.TitleContainer}>
            <span>
              {" "}
              <b>Chat Bot!</b>{" "}
            </span>
            <FontAwesomeIcon icon={faTimesCircle} onClick={toogleChatWindow} />{" "}
          </span>
          <div className="spacer" />
          <div className={Styles.chat}>
            {chatList.map((item) => {
              return <ChatCard type={item.type} text={item.text} />;
            })}
          </div>
          <span className={Styles.inputContainer}>
            <input type="text" name="" id={Styles.inputField} onChange={userInputHandle} value={userText}/>
            <button onClick={handleSubmit} >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </span>
        </div>
      </Slide>
    );
  } else {
    return (
      <Flip top>
        <div className={Styles.ChatIcon}>
          <img
            src={icon}
            alt=""
            height="80px"
            width="80px"
            onClick={toogleChatWindow}
          />
        </div>
      </Flip>
    );
  }
};

export default ChatBox;
