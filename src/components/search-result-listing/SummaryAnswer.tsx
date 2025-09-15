import React, { useState } from 'react'

interface SummaryAnswerProps {
  title?: string
  shortDescription?: string;
  description?: string;
  'data-node-id'?: string
}

const SummaryAnswer: React.FC<SummaryAnswerProps> = ({
  title = 'Összegzett válasz',
  shortDescription,
  description,
  'data-node-id': nodeId
}) => {
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleExpandClick = async () => {
    if (showFullDescription) {
      // If collapsing, no loading needed
      setShowFullDescription(false);
      return;
    }

    // Simulate loading when expanding
    setIsLoading(true);
    
    // Simulate realistic loading time for fetching expanded content (1-2 seconds)
    const loadingTime = Math.random() * 1000 + 1000; // 1-2 seconds
    await new Promise(resolve => setTimeout(resolve, loadingTime));
    
    setShowFullDescription(true);
    setIsLoading(false);
  };

  return (
    <section className="srl-summary-answer" data-node-id={nodeId} aria-labelledby="srl-summary-title">
      <h3 id="srl-summary-title" className="srl-summary-title">{title}</h3>
      <div className="srl-summary-content">
        {showFullDescription ? (
          <div dangerouslySetInnerHTML={{ __html: description || '' }} />
        ) : (
          <p>{shortDescription}</p>
        )}
      </div>
      <div className="srl-summary-cta-wrapper">
        <button 
          className={`srl-summary-cta ${isLoading ? 'srl-summary-cta--loading' : ''}`}
          type="button" 
          onClick={handleExpandClick}
          disabled={isLoading}
        >
          <span>{showFullDescription ? 'Vissza a tömörebb válaszhoz' : 'Kérem a bővebb választ'}</span>
          {isLoading ? (
            <div className="srl-summary-cta__spinner">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="spinner"
              >
                <circle 
                  cx="8" 
                  cy="8" 
                  r="6" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeDasharray="28.27" 
                  strokeDashoffset="28.27"
                  className="spinner-circle"
                />
              </svg>
            </div>
          ) : (
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: showFullDescription ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
            >
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          )}
        </button>
      </div>
    </section>
  )
}

export default SummaryAnswer
