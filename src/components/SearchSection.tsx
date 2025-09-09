import React from 'react'
import '../css/components/_search-section.scss'

// Material Design style inline SVG icons
const InfoOutlinedIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
)

const SearchIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
)

const SearchSection: React.FC = () => {
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
            />
            <button type="submit" className="search-input__button" aria-label="Keresés">
              <SearchIcon size={20} />
            </button>
          </div>
        </div>
        
        <div className="search-suggestions" data-node-id="1369:17569">
          <button className="search-suggestion" data-node-id="1369:17570">
            Mi az a közérdekű adat?
          </button>
          <button className="search-suggestion" data-node-id="1369:17571">
            Igénybe vehetem a CSOK pluszt egyedülállóként?
          </button>
          <button className="search-suggestion" data-node-id="1369:17572">
            Közúti baleset esetén mi a teendő?
          </button>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
