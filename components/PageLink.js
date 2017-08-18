import Link from 'next/link'

const generateLinks = (pageCount, letter) => {
  let links = []
  for (let page = 1; page < pageCount; page++) {
    links.push(
      <li>
        <Link as={'/' + letter.toLowerCase()} href={`/programme?letter=${letter}&page=${page}`} >
          <a>Page {page}</a>
        </Link>
      </li>
    )
  }
  return links
}

export default (props) => (
  <div>
    {generateLinks(props.pageCount, props.letter)}
  </div>
)
