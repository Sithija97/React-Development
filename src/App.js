import React from "react";
import "./App.css";

import Tweet from "./Tweet";

function App() {
  return (
    <div>
      <div className="header">
        <h1>App Component</h1>
      </div>
      <div className="app">
        <Tweet name="Sithija" msg="At work" likes="20 likes" />
        <Tweet name="Ruchira" msg="At school" likes="40 likes" />
        <Tweet name="Isuru" msg="busy" likes="60 likes" />
        <Tweet name="Bhagya" msg="Avalable" likes="20 likes" />
        <Tweet name="Kaveesha" msg="At meeting" likes="18 likes" />
      </div>
    </div>
  );
}

export default App;
