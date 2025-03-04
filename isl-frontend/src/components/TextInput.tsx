import React, { useState } from "react";
import axios from "axios";

const TextInput: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [gesture, setGesture] = useState<string>("");

  const handleTranslate = async () => {
    if (text.trim()) {
      try {
        const response = await axios.post("http://localhost:5000/text-to-gesture", { text });
        setGesture(response.data.gesture);
      } catch (error) {
        console.error("Error translating text to gesture", error);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate}>Translate</button>
      <p>Gesture: {gesture}</p>
    </div>
  );
};

export default TextInput;
