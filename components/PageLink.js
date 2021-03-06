import Link from 'next/link'

const generateLinks = (pageCount, letter) => {
  let links = []
  for (let page = 1; page <= pageCount; page++) {
    links.push(
      <li className="pageLink"   key={page}>
        <Link as={`/${letter.toLowerCase()}/${page}`} href={`/programme?letter=${letter}&page=${page}`}  >
          <a>Page {page}</a>
        </Link>
        <style jsx>{`

          .pageLink {
            display: inline-block;
            padding: 10px;
          }

        `}</style>
      </li>
    )
  }
  return links
}

export default (props) => (
  <div>
    {generateLinks(props.pageCount, props.letter) }
  </div>
)
