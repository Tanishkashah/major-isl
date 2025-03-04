import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const WebcamCapture: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [translatedText, setTranslatedText] = useState<string>("");

  const capture = async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      const response = await axios.post("http://localhost:5000/predict", { video: imageSrc });
      setTranslatedText(response.data.text);
    }
  };

  return (
    <div>
      <Webcam ref={webcamRef} />
      <button onClick={capture}>Translate Sign</button>
      <p>Translation: {translatedText}</p>
    </div>
  );
};

export default WebcamCapture;
