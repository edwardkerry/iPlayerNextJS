import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Programme from '../components/Programme'
import fetch from 'isomorphic-unfetch'


const Programmes = (props) => (
  <div>
    <Header />
    <SearchBar />
    <ul>
      {props.programmes.map((programme) => (
        <Programme
          key={programme.id}
          title={programme.title}
          image={programme.images.standard}
          synopses={programme.synopses.small}
          />
      ))}
    </ul>
  </div>
)


Programmes.getInitialProps = async function (context) {
  const letter = context.query.letter
  const res = await fetch(`https://ibl.api.bbci.co.uk/ibl/v1/atoz/${letter}/programmes`)
  const data = await res.json()

    return {
      page: data.page,
      per_page: data.per_page,
      programme_count: data.count,
      programmes: data.atoz_programmes.elements
    }
}

export default Programmes
