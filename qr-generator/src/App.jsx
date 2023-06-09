import logo from "./logo.svg";
import "./App.css";
import QRCode from "react-qr-code";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <QRCode value={text} />

      <div className="input-container">
        <input
          className="input-field"
          type="text"
          value={text}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
