import { SearchResultData } from '../types/types';

// Map search terms to their corresponding JSON file names
const SEARCH_TERM_TO_FILE_MAP: Record<string, string> = {
  'közérdekű adat': 'kozerdeku-adat',
  'mi az a közérdekű adat?': 'kozerdeku-adat',
  'adatvédelem': 'adatvedelem',
  'szerződés': 'szerzodes',
  'igénybe vehetem a csok pluszt egyedülállóként?': 'csok-plusz-egyedulallo',
  'közúti baleset esetén mi a teendő?': 'kozuti-baleset-teendo',
  'otthon start program': 'otthon-start-program',
  'cégalapítás lépései': 'cegalapitas-lepései',
  'csendrendelet szabályai': 'csendrendelet-szabalyai',
  'csendrendelet': 'csendrendelet-szabalyai'
};

export const searchForResults = async (query: string): Promise<SearchResultData | null> => {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Find matching file name
  let fileName: string | null = null;
  
  // First try exact match
  if (SEARCH_TERM_TO_FILE_MAP[normalizedQuery]) {
    fileName = SEARCH_TERM_TO_FILE_MAP[normalizedQuery];
  } else {
    // Then try partial match
    for (const [searchTerm, fileNameValue] of Object.entries(SEARCH_TERM_TO_FILE_MAP)) {
      if (searchTerm.includes(normalizedQuery) || normalizedQuery.includes(searchTerm)) {
        fileName = fileNameValue;
        break;
      }
    }
  }
  
  if (!fileName) {
    console.log(`No results found for: "${query}"`);
    return null;
  }
  
  try {
    // Dynamically import the JSON file
    const searchResult = await import(`../data/search-results/${fileName}.json`);
    return searchResult.default as SearchResultData;
  } catch (error) {
    console.error(`Error loading search result file: ${fileName}.json`, error);
    return null;
  }
};
