import React, { Component } from "react";
import ChatBox from "./Components/ChatBox/ChatBox";
import "./App.css";

export default class App extends Component {
  state = {
    chatShown: false,
    chatList: [{ type: "System", text: "Welcome To Our App User!" }],
    userText: "",
  };
  toogleChatWindow = () => {
    this.setState({ chatShown: !this.state.chatShown });
  };
  userInputHandle = (e) => {
    this.setState({ userText: e.target.value });
  };
  handleSubmit = () => {
    this.setState({
      chatList: [
        { text: this.state.userText, type: "User" },
        ...this.state.chatList,
      ],userText:""
    });
  };
  render() {
    return (
      <div>
        <ChatBox
          show={this.state.chatShown}
          toogleChatWindow={this.toogleChatWindow}
          chatList={this.state.chatList}
          userInputHandle={this.userInputHandle}
          handleSubmit={this.handleSubmit}
          userText={this.state.userText}
        />
      </div>
    );
  }
}
