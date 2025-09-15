import React, { useState, KeyboardEvent } from 'react'
import 'remixicon/fonts/remixicon.css'
import '../css/components/_search-section.scss'

// Material Design style inline SVG icons
const InfoOutlinedIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
)

interface SearchSectionProps {
  onSearch: (query: string) => void
  searchQuery: string
  onQueryChange: (query: string) => void
}

const SearchSection: React.FC<SearchSectionProps> = ({ 
  onSearch, 
  searchQuery, 
  onQueryChange 
}) => {
  const [inputValue, setInputValue] = useState(searchQuery)
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue.trim())
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    onQueryChange(value)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    onQueryChange(suggestion)
    onSearch(suggestion)
    setShowSuggestions(false)
  }

  const handleInputFocus = () => {
    // Show suggestions with a sexy delay
    setTimeout(() => {
      setShowSuggestions(true)
    }, 150)
  }

  const handleInputBlur = (e: React.FocusEvent) => {
    // Check if the related target is within the suggestions
    const relatedTarget = e.relatedTarget as HTMLElement
    if (relatedTarget && relatedTarget.closest('.search-suggestions-dropdown')) {
      return // Don't hide if clicking on suggestions
    }
    
    // Hide suggestions with a delay to allow for suggestion clicks
    setTimeout(() => {
      setShowSuggestions(false)
    }, 150)
  }

  const handleClearInput = () => {
    setInputValue('')
    onQueryChange('')
  }

  return (
    <section className="search-section" data-node-id="1369:17555">
      <div className="search-container" data-node-id="1369:17615">
        <h1 className="search-title" data-node-id="1369:17556">
          Jogi információ kereső
        </h1>
        
        <p className="search-subtitle" data-node-id="1369:17557">
          Írjon be egy jogi kérdést vagy élethelyzetet, amire választ keres. A kereső mesterséges 
          intelligenciával elemzi a kérdését, és a legrelevánsabb találatokat jeleníti meg.
        </p>
        
        <div className="search-wrapper" data-node-id="1369:17558">
          <div className="search-callout" data-node-id="1369:17559">
            <div className="search-callout__background" data-node-id="1369:17560"></div>
            <div className="search-callout__icon" data-node-id="1369:17561">
              <InfoOutlinedIcon size={24} />
            </div>
            <div className="search-callout__content" data-node-id="1369:17563">
              <p className="search-callout__text" data-node-id="1369:17566">
                Amennyiben valamely múltbeli időpontra vonatkozó <strong>jogszabályt keres</strong>, kattintson <a href="#" className="search-callout__link">ide</a>.
              </p>
            </div>
          </div>
          
          <div className="search-input-wrapper" data-node-id="1369:17568">
            <input
              type="text"
              className="search-input"
              placeholder='Pl.: "Mikor bűntett a közérdekű adattal való visszaélés?" '
              aria-label="Jogi kérdés keresése"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            {inputValue.length > 0 && (
              <button 
                type="button" 
                className="search-input__clear-button" 
                aria-label="Keresés törlése"
                onClick={handleClearInput}
              >
                <i className="ri-close-line"></i>
              </button>
            )}
            <button 
              type="button" 
              className="search-input__button" 
              aria-label="Keresés"
              onClick={handleSearch}
            >
              <i className="ri-search-line"></i>
            </button>
            {/* Search Suggestions Dropdown */}
            {showSuggestions && (
              <div className="search-suggestions-dropdown">
                <div className="search-suggestions-content">
                  {/* Trending Searches Column */}
                  <div className="search-suggestions-column">
                    <div className="search-suggestions-header">
                      <i className="ri-fire-line search-suggestions-header-icon"></i>
                      <span className="search-suggestions-title">Trending searches</span>
                    </div>
                    <div className="search-suggestions-list">
                      <button 
                        className="search-suggestion-item" 
                        onClick={() => handleSuggestionClick('közérdekű adat')}
                        tabIndex={0}
                      >
                        <i className="ri-search-line search-suggestion-icon"></i>
                        <span className="search-suggestion-text">közérdekű adat</span>
                      </button>
                      <button 
                        className="search-suggestion-item" 
                        onClick={() => handleSuggestionClick('Otthon start program')}
                        tabIndex={0}
                      >
                        <i className="ri-search-line search-suggestion-icon"></i>
                        <span className="search-suggestion-text">Otthon start program</span>
                      </button>
                    </div>
                  </div>

                  {/* Historical Searches Column */}
                  <div className="search-suggestions-column">
                    <div className="search-suggestions-header">
                      <i className="ri-history-line search-suggestions-header-icon"></i>
                      <span className="search-suggestions-title">Historical search</span>
                    </div>
                    <div className="search-suggestions-list">
                      <button 
                        className="search-suggestion-item" 
                        onClick={() => handleSuggestionClick('Cégalapítás lépései')}
                        tabIndex={0}
                      >
                        <i className="ri-search-line search-suggestion-icon"></i>
                        <span className="search-suggestion-text">Cégalapítás lépései</span>
                      </button>
                      <button 
                        className="search-suggestion-item" 
                        onClick={() => handleSuggestionClick('Csendrendelet szabályai')}
                        tabIndex={0}
                      >
                        <i className="ri-search-line search-suggestion-icon"></i>
                        <span className="search-suggestion-text">Csendrendelet szabályai</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="search-suggestions" data-node-id="1369:17569">
          <button 
            className="search-suggestion" 
            data-node-id="1369:17570"
            onClick={() => handleSuggestionClick('Mi az a közérdekű adat?')}
          >
            Mi az a közérdekű adat?
          </button>
          <button 
            className="search-suggestion" 
            data-node-id="1369:17571"
            onClick={() => handleSuggestionClick('Igénybe vehetem a CSOK pluszt egyedülállóként?')}
          >
            Igénybe vehetem a CSOK pluszt egyedülállóként?
          </button>
          <button 
            className="search-suggestion" 
            data-node-id="1369:17572"
            onClick={() => handleSuggestionClick('Közúti baleset esetén mi a teendő?')}
          >
            Közúti baleset esetén mi a teendő?
          </button>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
