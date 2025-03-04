import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import TextInput from "./pages/textinput";
import VoiceInput from "./pages/voiceinput";
import CameraInput from "./pages/camerainput";
import "../src/App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/text-input" element={<TextInput />} />
          <Route path="/voice-input" element={<VoiceInput />} />
          <Route path="/camera-input" element={<CameraInput />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
