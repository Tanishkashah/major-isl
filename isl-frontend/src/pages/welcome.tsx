import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/welcome.css";
import { FaKeyboard, FaMicrophone, FaCamera } from "react-icons/fa";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Language that Evokes Feeling</h1>
      <p className="welcome-subtitle">Convert text, voice, and gestures into sign language seamlessly.</p>
      
      <div className="button-container">
        <button className="welcome-button" onClick={() => navigate("/text-input")}> 
          <FaKeyboard className="icon" /> Text Input
        </button>
        <button className="welcome-button" onClick={() => navigate("/voice-input")}> 
          <FaMicrophone className="icon" /> Voice Input
        </button>
        <button className="welcome-button" onClick={() => navigate("/camera-input")}> 
          <FaCamera className="icon" /> Camera Input
        </button>
      </div>
    </div>
  );
};

export default Welcome;
