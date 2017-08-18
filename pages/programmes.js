import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

export default () => (
  <div>
    <Header />
    <SearchBar baseRef="programmes?search=" />
  </div>
)
