import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Programme from '../components/Programme'
import PageLink from '../components/PageLink'

import fetch from 'isomorphic-unfetch'

const pageCount = (programme_count, per_page) => {
  return Math.ceil(programme_count / per_page)
}

const Programmes = (props) => (
  <div className="container">
    <Header />
    <SearchBar />
    <PageLink pageCount={pageCount(props.programme_count, props.per_page)} letter={props.letter} />
    <ul>
      {props.programmes.map((programme) => (
        <Programme
          key={programme.id}
          title={programme.title}
          image={programme.images.standard}
          synopsis={programme.synopses.small}
          />
      ))}
    </ul>
  </div>
)

Programmes.getInitialProps = async function (context) {
  const letter = context.query.letter.toLowerCase()
  const page = context.query.page || 1
  const url = `https://ibl.api.bbci.co.uk/ibl/v1/atoz/${letter}/programmes?page=${page}`
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)

    return {
      letter: letter,
      page: data.atoz_programmes.page,
      per_page: data.atoz_programmes.per_page,
      programme_count: data.atoz_programmes.count,
      programmes: data.atoz_programmes.elements
    }
}

export default Programmes
