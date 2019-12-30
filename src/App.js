import React from "react";
import './App.css';

import Tweet from "./Tweet";

function App() {
  return (
    <div className="app">
      <h1>App Component</h1>
      <Tweet/>
      <Tweet/>
      <Tweet/>
    </div>
  );
}

export default App;
