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
  return (
    <section className="srl-summary-answer" data-node-id={nodeId} aria-labelledby="srl-summary-title">
      <h3 id="srl-summary-title" className="srl-summary-title">{title}</h3>
      <div className="srl-summary-content">
        <p>{showFullDescription ? description : shortDescription}</p>
      </div>
      <div className="srl-summary-cta-wrapper">
        <button className="srl-summary-cta" type="button" onClick={() => setShowFullDescription(true)}>
          <span>Kérem a bővebb választ</span>
        </button>
      </div>
    </section>
  )
}

export default SummaryAnswer
