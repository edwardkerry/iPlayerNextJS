import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

export default () => (
  <div>
  <Header />
    <h1>iPlayer Programme Search</h1>
    <SearchBar baseRef="programmes?search=" />
  </div>
)
