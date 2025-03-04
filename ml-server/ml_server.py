from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
import cv2

app = Flask(__name__)

# Load model (Ensure you have a trained model in the 'model/' folder)
model = tf.keras.models.load_model("model/sign_language_model.h5")

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files["video"]
    video_path = "temp.mp4"
    file.save(video_path)

    # Process video frame by frame (Implement ISL recognition logic here)
    result = "Hello"  # Dummy output for now
    return jsonify({"text": result})

@app.route("/text-to-gesture", methods=["POST"])
def text_to_gesture():
    data = request.get_json()
    text = data["text"]

    # Convert text to gesture animation (Dummy response)
    gesture = f"Gesture for {text}"
    return jsonify({"gesture": gesture})

if __name__ == "__main__":
    app.run(port=5001)
