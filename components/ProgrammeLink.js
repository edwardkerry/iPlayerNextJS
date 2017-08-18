import Link from 'next/link'

export default (props) => (
    <li>
      <Link as={'/' + props.letter.toLowerCase()} href={`/programme?letter=${props.letter}`} >
        <a>{props.letter}</a>
      </Link>
    </li>
)
