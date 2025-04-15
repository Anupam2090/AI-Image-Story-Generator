import React, { useState } from "react";
import UploadImage from "./components/UploadImage";
import StoryDisplay from "./components/StoryDisplay";
import './styles.css';

const App = () => {
  const [storyData, setStoryData] = useState(null);
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return (
      <div className="landing-page">
        <h1 className="welcome-title">✨ Welcome to AI Image Story Generator ✨</h1>
        <button className="enter-button" onClick={() => setShowLanding(false)}>
          Open App 🚀
        </button>
      </div>
    );
  }


  return (
    <div className="app">
      <h1>
      <img 
        src="/assets/chatbot (1).png" 
        alt="AI Image Icon" 
        style={{ height: '45px', verticalAlign: 'middle', marginRight: '10px' }} 
       />
        AI Image Story Generator</h1>
      <UploadImage setStoryData={setStoryData} />
      {storyData && <StoryDisplay storyData={storyData} />}
    </div>
  );
};

export default App;
