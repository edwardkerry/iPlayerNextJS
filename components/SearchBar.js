import ProgrammeLink from './ProgrammeLink'

const alphabet = ['a', 'b']

export default (props) => (
  <ul>
    {alphabet.map((letter) => (
      <ProgrammeLink baseRef={props.baseRef} letter={letter}/>
    ))}
  </ul>
)
