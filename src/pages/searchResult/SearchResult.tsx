import { useEffect, useState } from 'react';
import SearchSection from "../../components/SearchSection.tsx";
import SearchResultListing from "../../components/search-result-listing/SearchResultListing.tsx";
import { searchForResults } from '../../services/searchService';
import { useLocation, useNavigate } from "react-router-dom";
import TitleBlock from "../../components/search-result-listing/TitleBlock.tsx";
import { SearchResultData } from "../../types/types.ts";


const SearchResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState<string>(query ?? '')
  const [searchResults, setSearchResults] = useState<SearchResultData | null>(null)

  useEffect(() => {
    handleSearch(searchQuery);
  }, []);

  const handleSearch = async (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();
    navigate(`/search-result?query=${encodeURIComponent(normalizedQuery)}`);

    try {
      const results = await searchForResults(normalizedQuery);
      console.log(results);
      if (results) {
        setSearchResults(results);
        setSearchQuery(query);
      } else {
        // Handle no results case - you could show a "No results found" message
        console.log(`No results found for: "${query}"`);
        setSearchResults(null);
      }
    } catch (error) {
      console.error('Error searching for results:', error);
      setSearchResults(null);
    }
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setSearchResults(null)
  }

  return (
    <>
      <SearchSection
        onSearch={handleSearch}
        searchQuery={searchQuery}
        onQueryChange={setSearchQuery}
      />
      <section className="search-result-listing">
        <div className="srl-container">
          <TitleBlock
            title="Keresés találatok"
            subtitle={searchResults?.resultId}
          />
          {searchResults && (
            <SearchResultListing
              searchResults={searchResults}
              onClearSearch={handleClearSearch}
            />
          )}
        </div>
      </section>

    </>
  )
}

export default SearchResult
