import { React, useState, useEffect } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
import Conversations from "./Conversations";

function ChatScreen() {
  let link = window.location.href;
  console.log("this is tile > ", link);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  useEffect(() => {
    const myfunction = (link) => {
      link.search("Elon") > 0
        ? setMessages(Conversations[0])
        : link.search("Robert") > 0
        ? setMessages(Conversations[1])
        : link.search("Ramanujan") > 0
        ? setMessages(Conversations[2])
        : link.search("Jeff") > 0
        ? setMessages(Conversations[3])
        : link.search("Larry")
        ? setMessages(Conversations[4])
        : console.log(link);
    };
    myfunction(link);
    console.log("this is messages", messages);
  }, []);

  return (
    <div className="ChatScreen">
      <p className="ChatScreen__timestamp">
        You matched with Elon on Sept 21, 2021{" "}
      </p>
      {messages.map((x) =>
        x.name ? (
          <div className="ChatScreen__message">
            <Avatar className="chatscreen__avatar" alt={x.name} src={x.image} />
            <p className="ChatScreen__txt">{x.message}</p>
          </div>
        ) : (
          <div className="ChatScreen__message">
            <p className="ChatScreen__txt__self">{x.message}</p>
          </div>
        )
      )}
      <form className="ChatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="ChatScreen__inputField"
          type="text"
          placeholder="type a message..."
        />
        <button className="input__button" onClick={handleSend}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
