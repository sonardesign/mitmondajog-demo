import React from 'react'
import TitleBlock from './TitleBlock'
import Tabs from './Tabs'
import SummaryAnswer from './SummaryAnswer'
import Callout from './Callout'
import Answers from './Answers'
import { SearchResult } from '../Home'

interface SearchResultListingProps {
  searchResults: SearchResult
  onClearSearch: () => void
}

const SearchResultListing: React.FC<SearchResultListingProps> = ({ 
  searchResults, 
  onClearSearch 
}) => {
  const tabsOptions = ['Országos jogszabályok', 'Önkormányzati rendeletek']

  // Transform search results data for components
  const answersData = searchResults.answers.map(answer => ({
    id: answer.id,
    title: answer.title,
    body: (
      <>
        <div className="srl-answer-meta">{answer.meta}</div>
        <p>{answer.text}</p>
        <div className="srl-answer-actions">
          <button className="srl-answer-action-btn srl-answer-bookmark" type="button" aria-label="Könyvjelző">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 2v12l5-3 5 3V2H3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </button>
          <button className="srl-answer-action-btn srl-answer-expand" type="button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={answer.expanded ? "M4 6l4 4 4-4" : "M4 10l4-4 4 4"} stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            <span>{answer.expanded ? answer.actions.showLess : answer.actions.showMore}</span>
          </button>
        </div>
      </>
    )
  }))

  return (
    <section className="search-result-listing" data-node-id="SRL:ROOT">
      <div className="srl-container">
        <TitleBlock 
          title="Keresés találatok"
          subtitle={searchResults.resultId}
        />
        <div className="srl-content">
          <Tabs options={tabsOptions} />
          <div className="srl-results-container">
            <SummaryAnswer 
              title={searchResults.summaryAnswer.title}
              content={<p>{searchResults.summaryAnswer.text}</p>}
            />
            <Callout 
              title={searchResults.callout.title}
              text={searchResults.callout.text}
            />
            <Answers items={answersData} />
            <div className="srl-load-more">
              <button className="srl-load-more-btn" type="button">
                {searchResults.loadMoreText}
              </button>
            </div>
            <div className="srl-clear-search">
              <button 
                className="srl-clear-search-btn" 
                type="button"
                onClick={onClearSearch}
              >
                Új keresés
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchResultListing
