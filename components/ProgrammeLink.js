import Link from 'next/link'

export default (props) => (
    <li>
      <Link href={props.baseRef + props.letter} >
        <a>{props.letter}</a>
      </Link>
    </li>
)
