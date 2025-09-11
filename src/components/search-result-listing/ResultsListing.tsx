import React from 'react'

interface ResultsListingProps {
  items?: Array<{ id: string; title: string }>
  'data-node-id'?: string
}

const ResultsListing: React.FC<ResultsListingProps> = ({
  items = [
    { id: 'ex-1', title: 'Eredmény 1' },
    { id: 'ex-2', title: 'Eredmény 2' },
  ],
  'data-node-id': nodeId,
}) => {
  return (
    <section className="srl-results-listing" data-node-id={nodeId} aria-labelledby="srl-results-title">
      <h3 id="srl-results-title" className="srl-results-title">Találatok</h3>
      <ul className="srl-results">
        {items.map(item => (
          <li key={item.id} className="srl-result-item">
            <a href="#" className="srl-result-link">{item.title}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ResultsListing
