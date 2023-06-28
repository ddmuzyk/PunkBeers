import './BeerCard.css';

export const BeerCard = ({imgUrl, name, tagline}) => {
  return (
    <div className="beer-card-container">
      <img className='beer-card-img' src={imgUrl} alt='Beer Card'/>
      <h3>{name}</h3>
      <p>{tagline}</p>
    </div>
  )
}