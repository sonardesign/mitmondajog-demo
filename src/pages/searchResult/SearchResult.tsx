import { useEffect, useState } from 'react';
import SearchSection from "../../components/SearchSection.tsx";
import SearchResultListing from "../../components/search-result-listing/SearchResultListing.tsx";
import searchData from '../../data/searchData.json';
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

  const handleSearch = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();
    navigate(`/search-result?query=${encodeURIComponent(normalizedQuery)}`);

    // Check if query matches any search term in our data
    // const results = searchData.searchResults[normalizedQuery as keyof typeof searchData.searchResults]
    const results = searchData.searchResults.find(
      (value) => value.searchTerm.toLowerCase().includes(normalizedQuery)
    );
    console.log(results);
    if (results) {
      setSearchResults(results)
      setSearchQuery(query)
    } else {
      // Handle no results case - you could show a "No results found" message
      console.log(`No results found for: "${query}"`)
      setSearchResults(null)
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
