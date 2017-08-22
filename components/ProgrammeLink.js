import Link from 'next/link'

export default (props) => (
    <li className="letterButton">
      <Link as={'/' + props.letter.toLowerCase() + '/1'} href={`/programme?letter=${props.letter}&page=1`} >
        <a>{props.letter}</a>
      </Link>
      <style jsx>{`

        .letterButton {
          margin: 0 auto;
          padding: 10px;
          text-decoration: none;
          color: white;
          display: inline-block
        }

      `}</style>
    </li>
)
