import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chats from "./Chats";
import Header from "./Header";
import Tindercards from "./Tindercards";
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen";
function App() {
  return (
    //BEM CONVENTION
    <div className="app">
      {/* Header */}
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header />
            {/* now you will enter into chat with one person*/}
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header />
            <Chats />
          </Route>
          <Route path="/">
            <Header />{" "}
            {/* Always keep your home page at bottom bcoz javascript runs sequentially and if it is at the first 
          line, no matter what you write below this always homepage html will be loaded */}
            <Tindercards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
