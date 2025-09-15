export interface SearchResultData {
  searchTerm: string
  resultId: string
  summaryAnswer: {
    title: string
    shortDescription: string
    description: string
  }
  answers: Array<{
    title: string;
    meta: string;
    shortDescription: string;
    description: string;
  }>
}
