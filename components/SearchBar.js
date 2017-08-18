import ProgrammeLink from './ProgrammeLink'

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default (props) => (
  <ul>
    {alphabet.map((letter) => (
      <ProgrammeLink key={letter} letter={letter}/>
    ))}
  </ul>
)
