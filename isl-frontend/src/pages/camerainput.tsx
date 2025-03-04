import { useRef, useState, useEffect } from "react";
import "../styles/camerainput.css"; // Import the CSS file

const CameraInput = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 400, height: 300 }, // Reduced frame size
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        (videoRef.current.srcObject as MediaStream)
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, 400, 300);
        setCapturedImage(canvasRef.current.toDataURL("image/png"));
      }
    }
  };

  return (
    <div className="camera-container">
      <h2>Capture Sign Language Gesture</h2>
      <video ref={videoRef} autoPlay className="video-frame" />
      <button onClick={capturePhoto} className="capture-btn">Capture</button>
      <canvas ref={canvasRef} width="400" height="300" style={{ display: "none" }} />
      {capturedImage && <img src={capturedImage} alt="Captured" className="captured-image" />}
    </div>
  );
};

export default CameraInput;
