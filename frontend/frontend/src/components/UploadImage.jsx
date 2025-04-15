import React, { useState } from "react";
import Loader from "./Loader";
import axios from 'axios';


const UploadImage = ({ setStoryData }) => {
    const [image, setImage] = useState(null);
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };
  
    const handleSubmit = async () => {
      if (!image) {
        alert("Please select an image!");
        return;
      }
  
      setLoading(true);
      const formData = new FormData();
      formData.append("image", image);
      formData.append("prompt", prompt);
  
      try {
        const res = await axios.post("http://localhost:5000/upload", formData);
        setStoryData(res.data);
      } catch (err) {
        console.error("Error generating story:", err);
        alert("Failed to generate story.");
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="upload-box">
        <label htmlFor="prompt">✍️ Write a story prompt (optional):</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          placeholder="Type something creative..."
          onChange={(e) => setPrompt(e.target.value)}
        />
  
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Generating..." : "Generate Story"}
        </button>
        {loading && (
          <div className="outside-loader">
            <img src="/assets/letter.gif" alt="Loading..." />
  </div>
)}

      </div>
    );
  };
  
  export default UploadImage;
