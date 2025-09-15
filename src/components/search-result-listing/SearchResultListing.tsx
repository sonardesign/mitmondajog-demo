import React, { useEffect, useState } from 'react';
import Tabs from './Tabs';
import SummaryAnswer from './SummaryAnswer';
import Callout from './Callout';
import Answers from './Answers';
import { SearchResultData } from "../../types/types.ts";
import { useNavigate } from "react-router-dom";

interface SearchResultListingProps {
  searchResults: SearchResultData;
  onClearSearch: () => void;
}

const SearchResultListing: React.FC<SearchResultListingProps> = ({
  searchResults,
  onClearSearch
}) => {
  const tabsOptions = ['Országos jogszabályok', 'Önkormányzati rendeletek']
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setVisibleCount(3);
  }, [searchResults]);

  const navigate = useNavigate();

  const clearSearch = () => {
    navigate(`/`);
    onClearSearch();
  }


  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="srl-content">
      <Tabs options={tabsOptions} />
      <div className="srl-results-container">
        <SummaryAnswer
          title={searchResults.summaryAnswer.title}
          shortDescription={searchResults.summaryAnswer.shortDescription}
          description={searchResults.summaryAnswer.description}
        />
        <Callout title="Fontos információ" />
        <Answers items={searchResults.answers.slice(0, visibleCount)} />
        {visibleCount < searchResults.answers.length && (
          <div className="srl-load-more">
            <button
              className="srl-load-more-btn"
              type="button"
              onClick={loadMore}
            >
              További találatok
            </button>
          </div>
        )}
        <div className="srl-clear-search">
          <button
            className="srl-clear-search-btn"
            type="button"
            onClick={clearSearch}
          >
            Új keresés
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchResultListing
