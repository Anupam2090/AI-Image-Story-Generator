const StoryDisplay = ({ storyData }) => {
    return (
      <div className="story-box">
        <h2>
            <img 
                src="/assets/script.png" 
                alt="Book Icon" 
                style={{ height: '24px', verticalAlign: 'middle', marginRight: '10px' }} 
            />
            Generated Story
        </h2>

        <p>
            <strong>
                <img 
                src="/assets/closed-caption.png" 
                alt="Caption Icon" 
                style={{ height: '18px', verticalAlign: 'middle', marginRight: '8px' }} 
                />
                Caption:
            </strong> {storyData.caption}
        </p>

        <p><strong>Story:</strong> {storyData.story}</p>
      </div>
    );
  };
  
  export default StoryDisplay;
  