import './Home.scss'
import Header from './Header'
import SearchSection from './SearchSection'
import KozlonyokSection from './KozlonyokSection'
import BannersSection from './BannersSection'

const Home = () => {
  return (
    <main className="home" data-node-id="1365:38097">
      <Header />
      <SearchSection />
      <KozlonyokSection />
      <BannersSection />
    </main>
  )
}

export default Home
