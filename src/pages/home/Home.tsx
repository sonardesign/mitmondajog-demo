import { useState } from 'react'
import './Home.scss'
import SearchSection from "../../components/SearchSection.tsx";
import KozlonyokSection from "../../components/KozlonyokSection.tsx";
import BannersSection from "../../components/BannersSection.tsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();
    navigate(`/search-result?query=${encodeURIComponent(normalizedQuery)}`);
  }

  return (
    <>
      <SearchSection
        onSearch={handleSearch}
        searchQuery={searchQuery}
        onQueryChange={setSearchQuery}
      />

      <KozlonyokSection />
      <BannersSection />
    </>
  )
}

export default Home
