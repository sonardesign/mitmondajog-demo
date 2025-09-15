import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from "./pages/home/Home.tsx";
import Header from "./components/Header.tsx";
import SearchResult from "./pages/searchResult/SearchResult.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="app">
      <main className="home" data-node-id="1365:38097">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-result" element={<SearchResult />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
