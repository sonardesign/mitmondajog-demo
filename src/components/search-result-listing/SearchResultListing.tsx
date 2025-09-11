import React from 'react'
import TitleBlock from './TitleBlock'
import Tabs from './Tabs'
import SummaryAnswer from './SummaryAnswer'
import Callout from './Callout'
import Answers from './Answers'

const SearchResultListing: React.FC = () => {
  const tabsOptions = ['Országos jogszabályok', 'Önkormányzati rendeletek']

  return (
    <section className="search-result-listing" data-node-id="SRL:ROOT">
      <div className="srl-container">
        <TitleBlock 
          title="Keresés találatok"
          subtitle="b0bcf638-4e63-4bea-b54e-3db63db2d020"
        />
        <div className="srl-content">
          <Tabs options={tabsOptions} />
          <div className="srl-results-container">
            <SummaryAnswer />
            <Callout 
              title=""
              text="További részletekért javasolt a vonatkozó jogszabályok áttanulmányozása."
            />
            <Answers />
            <div className="srl-load-more">
              <button className="srl-load-more-btn" type="button">
                További találatok
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchResultListing
