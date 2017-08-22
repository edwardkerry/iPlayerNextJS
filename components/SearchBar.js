import ProgrammeLink from './ProgrammeLink'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default (props) => (
  <ul>
    {alphabet.map((letter, index) => (
      <ProgrammeLink key={index} letter={letter}/>
    ))}
  </ul>
)
