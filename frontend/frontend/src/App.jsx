import React, { useState } from "react";
import UploadImage from "./components/UploadImage";
import StoryDisplay from "./components/StoryDisplay";
import './styles.css';

const App = () => {
  const [storyData, setStoryData] = useState(null);

  return (
    <div className="app">
      <h1>🖼️ AI Image Story Generator</h1>
      <UploadImage setStoryData={setStoryData} />
      {storyData && <StoryDisplay storyData={storyData} />}
    </div>
  );
};

export default App;
