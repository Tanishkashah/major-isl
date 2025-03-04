import { useState } from "react";
import "../styles/textinput.css";

const TextInput = () => {
  const [inputText, setInputText] = useState("");
  const [gesture, setGesture] = useState("");

  const handleSubmit = async () => {
    // API Call to Backend for Gesture Translation
    const response = await fetch("http://localhost:5000/translate-text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: inputText }),
    });

    const data = await response.json();
    setGesture(data.gesture);
  };

  return (
    <div className="textinput-container">
      <h1 className="title">Text to Gesture</h1>
      <textarea
        className="text-box"
        placeholder="Enter your text..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="submit-btn" onClick={handleSubmit}>Translate</button>
      <div className="gesture-box">
        {gesture && <img src={`/gestures/${gesture}.gif`} alt="Gesture" />}
      </div>
    </div>
  );
};

export default TextInput;
