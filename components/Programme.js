export default (props) => (
  <li>
    <p className="progTitle">{props.title}</p>
    <img className="progImg" src={getImageWithResolution(props.image)} />
    <p className="progSyn">{props.synopsis}</p>
    <style jsx>{`

      li {
        list-style: none;
        color: white;
      }

      .progTitle:hover  {
        color: #f54997;
      }

      .progImg{
        border-radius: 2px;
        border: 1px solid #1E1E1E;
      }

      .progSyn{
        color: #929292;
      }

    `}</style>
  </li>
)

const getImageWithResolution = (url) => {
  return url.replace('{recipe}', '406x228')
}
