import React, { useState } from "react";
import Loader from "./Loader";
import axios from "axios";

const UploadImage = ({ setStoryData }) => {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setErrorMessage(""); 
  };

  const handleSubmit = async () => {
    if (!image) {
      setErrorMessage("Please select an image!");
      return;
    }

    setLoading(true);
    setErrorMessage(""); 

    const formData = new FormData();
    formData.append("image", image);
    formData.append("prompt", prompt);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData);
      setStoryData(res.data);
    } catch (err) {
      console.error("Error generating story:", err);
      setErrorMessage("Failed to generate story.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-box">
      <label htmlFor="prompt">
        <img
          src="/assets/writing.png"
          alt="Write Icon"
          style={{
            height: "20px",
            verticalAlign: "middle",
            marginRight: "8px",
          }}
        />
        Write a story prompt (optional):
      </label>

      <input
        type="text"
        id="prompt"
        value={prompt}
        placeholder="Type something creative..."
        onChange={(e) => setPrompt(e.target.value)}
      />

      <input type="file" onChange={handleImageChange} />

      {/* Error message with icon */}
      {errorMessage && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "red",
            background: "#ffe6e6",
            padding: "12px 20px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            zIndex: 9999,
          }}
        >
          <img
            src="/assets/cancel.png"
            alt="Error"
            style={{ height: "18px", marginRight: "8px" }}
          />
          {errorMessage}
        </div>
      )}

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Generating..." : "Generate Story"}
      </button>

      {loading && (
        <div className="outside-loader">
          <img src="/assets/loading.gif" alt="Loading..." />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
