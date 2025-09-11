export interface SearchResultData {
  searchTerm: string
  resultId: string
  summaryAnswer: {
    title: string
    shortDescription: string
    description: string
  }
  callout: {
    title: string
    text: string
  }
  answers: Array<{
    title: string;
    meta: string;
    shortDescription: string;
    description: string;
  }>
}
