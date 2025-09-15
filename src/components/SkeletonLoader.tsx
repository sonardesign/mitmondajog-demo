import React from 'react'

interface SkeletonLoaderProps {
  className?: string
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className = '' }) => {
  return (
    <div className={`skeleton-loader ${className}`}>
      <div className="srl-content">
        {/* Tabs skeleton */}
        <div className="skeleton-tabs">
          <div className="skeleton-tab skeleton-tab--active"></div>
          <div className="skeleton-tab"></div>
        </div>
        
        <div className="srl-results-container">
          {/* Summary Answer skeleton */}
          <div className="skeleton-summary">
            <div className="skeleton-summary-title"></div>
            <div className="skeleton-summary-content">
              <div className="skeleton-line skeleton-line--long"></div>
              <div className="skeleton-line skeleton-line--medium"></div>
              <div className="skeleton-line skeleton-line--short"></div>
            </div>
            <div className="skeleton-summary-button"></div>
          </div>
          
          {/* Callout skeleton */}
          <div className="skeleton-callout">
            <div className="skeleton-callout-icon"></div>
            <div className="skeleton-callout-content">
              <div className="skeleton-line skeleton-line--medium"></div>
              <div className="skeleton-line skeleton-line--short"></div>
            </div>
          </div>
          
          {/* Answers skeleton */}
          <div className="skeleton-answers">
            {[1, 2, 3].map(index => (
              <div key={index} className="skeleton-answer">
                <div className="skeleton-answer-title"></div>
                <div className="skeleton-answer-meta"></div>
                <div className="skeleton-answer-content">
                  <div className="skeleton-line skeleton-line--long"></div>
                  <div className="skeleton-line skeleton-line--medium"></div>
                  <div className="skeleton-line skeleton-line--long"></div>
                  <div className="skeleton-line skeleton-line--short"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoader
