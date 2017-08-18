import ProgrammeLink from './ProgrammeLink'

const alphabet = ['a', 'b']

export default (props) => (
  <ul>
    {alphabet.map((letter) => (
      <ProgrammeLink key={letter} letter={letter}/>
    ))}
  </ul>
)
