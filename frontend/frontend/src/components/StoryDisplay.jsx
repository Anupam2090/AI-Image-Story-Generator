const StoryDisplay = ({ storyData }) => {
    return (
      <div className="story-box">
        <h2>📖 Generated Story</h2>
        <p><strong>Caption:</strong> {storyData.caption}</p>
        <p><strong>Story:</strong> {storyData.story}</p>
      </div>
    );
  };
  
  export default StoryDisplay; // ✅ This is required!
  