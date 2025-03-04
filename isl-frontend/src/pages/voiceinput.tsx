import { useState } from "react";
import "../styles/voiceinput.css";

const VoiceInput = () => {
  const [recording, setRecording] = useState(false);
  const [gesture, setGesture] = useState("");

  const startRecording = () => {
    setRecording(true);
    // Simulate recording process
    setTimeout(() => {
      setRecording(false);
      setGesture("hello"); // Example response
    }, 3000);
  };

  return (
    <div className="voiceinput-container">
      <h1 className="title">Voice to Gesture</h1>
      <button className="record-btn" onClick={startRecording} disabled={recording}>
        {recording ? "Recording..." : "Start Recording"}
      </button>
      <div className="gesture-box">
        {gesture && <img src={`/gestures/${gesture}.gif`} alt="Gesture" />}
      </div>
    </div>
  );
};

export default VoiceInput;
