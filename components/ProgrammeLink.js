import Link from 'next/link'

export default (props) => (
    <li>
      <Link as={'/p/' + props.letter} href={`/programme?letter=${props.letter}`} >
        <a>{props.letter}</a>
      </Link>
    </li>
)
