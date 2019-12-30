import React from "react";
import "./App.css";
export default function Tweet({ name, msg, likes }) {
  return (
    <div className="TweetScreen">
      <h3>{name}</h3>
      <h3>{msg}</h3>
      <b>{likes}</b>
    </div>
  );
}
