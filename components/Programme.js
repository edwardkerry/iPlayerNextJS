export default (props) => (
  <li>
    <p>{props.title}</p>
    <img src={swapRecipe(props.image)} />
    <p>{props.synopses}</p>
  </li>
)

const swapRecipe = (url) => {
  return url.replace('{recipe}', '406x228')
}
