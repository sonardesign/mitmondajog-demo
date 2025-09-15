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
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    handleSearch(searchQuery);
  }, []);

  const handleSearch = async (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();
    navigate(`/search-result?query=${encodeURIComponent(normalizedQuery)}`);

    // Start loading
    setIsLoading(true);
    setSearchResults(null);

    try {
      // Simulate realistic backend loading time (2-4 seconds)
      const loadingTime = Math.random() * 2000 + 2000; // 2-4 seconds
      await new Promise(resolve => setTimeout(resolve, loadingTime));
      
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
    } finally {
      setIsLoading(false);
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
            isLoading={isLoading}
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
