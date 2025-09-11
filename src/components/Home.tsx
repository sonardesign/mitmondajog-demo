import React, { useState } from 'react'
import './Home.scss'
import Header from './Header'
import SearchSection from './SearchSection'
import SearchResultListing from './search-result-listing/SearchResultListing'
import KozlonyokSection from './KozlonyokSection'
import BannersSection from './BannersSection'
import searchData from '../data/searchData.json'

export interface SearchResult {
  searchTerm: string
  resultId: string
  summaryAnswer: {
    title: string
    text: string
    extendedText: string
  }
  callout: {
    title: string
    text: string
  }
  answers: Array<{
    id: string
    title: string
    meta: string
    text: string
    expanded: boolean
    actions: {
      showLess: string
      showMore: string
    }
  }>
  loadMoreText: string
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null)
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false)

  const handleSearch = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim()
    
    // Check if query matches any search term in our data
    const results = searchData.searchResults[normalizedQuery as keyof typeof searchData.searchResults]
    
    if (results) {
      setSearchResults(results)
      setIsSearchActive(true)
      setSearchQuery(query)
    } else {
      // Handle no results case - you could show a "No results found" message
      console.log(`No results found for: "${query}"`)
      setSearchResults(null)
      setIsSearchActive(false)
    }
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setSearchResults(null)
    setIsSearchActive(false)
  }

  return (
    <main className="home" data-node-id="1365:38097">
      <Header />
      <SearchSection 
        onSearch={handleSearch}
        searchQuery={searchQuery}
        onQueryChange={setSearchQuery}
      />
      {isSearchActive && searchResults && (
        <SearchResultListing 
          searchResults={searchResults}
          onClearSearch={handleClearSearch}
        />
      )}
      {!isSearchActive && (
        <>
          <KozlonyokSection />
          <BannersSection />
        </>
      )}
    </main>
  )
}

export default Home
