import './BeerCard.css';

export const BeerCard = ({imgUrl, name, tagline}) => {
  return (
    <div className="beer-card-container">
    <span className='beer-card-img-container'>
      <img className='beer-card-img' src={imgUrl} alt='Beer Card'/>
    </span>
    <h3 className='beer-card-name'>{name}</h3>
    <p className='beer-card-tagline'>{tagline}</p>
    </div>
  )
}