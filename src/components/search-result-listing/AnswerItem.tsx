import React, { useState } from 'react'

export interface AnswerItemProps {
  title: string;
  meta: string;
  shortDescription?: string;
  description?: string;
}

const AnswerItem: React.FC<AnswerItemProps> = ({ title, meta, description, shortDescription }) => {
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);
  return (

    <article className={`srl-answer`}>
      <header className="srl-answer-header">
        <div className="srl-answer-title-wrapper">
          <h4 className="srl-answer-title">{title}</h4>
        </div>
      </header>
      <div className="srl-answer-body">
        <div className="srl-answer-meta">{`${meta}`}</div>
        {showFullDescription ? (
          <div dangerouslySetInnerHTML={{ __html: description || '' }} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: shortDescription || '' }} />
        )}
        <div className="srl-answer-actions">
          <button className="srl-answer-action-btn srl-answer-bookmark" type="button" aria-label="Könyvjelző">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 2v12l5-3 5 3V2H3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
          {
            showFullDescription ? (<button className="srl-answer-action-btn srl-answer-expand" type="button"
                                           onClick={() => setShowFullDescription(false)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              <span>Kevesebb mutatása</span>
            </button>) : (<button className="srl-answer-action-btn srl-answer-expand" type="button"
                                  onClick={() => setShowFullDescription(true)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              <span>Több mutatása</span>
            </button>)
          }
        </div>
      </div>
    </article>
  )
}

export default AnswerItem
