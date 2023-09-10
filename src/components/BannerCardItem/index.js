import './index.css'

const BannerCardItem = props => {
  const {sourceItem} = props
  const {headerText, description, className} = sourceItem

  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="card-button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
