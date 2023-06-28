import './BeerCard.css';
import { Link } from 'react-router-dom';

export const BeerCard = ({imgUrl, name, tagline, id}) => {
  return (
    <div className="beer-card-container">
      <div className='beer-card-img-container'>
        <img className='beer-card-img' src={imgUrl} alt='Beer Card'/>
      </div>
      <h3 className='beer-card-name'>{name}</h3>
      <p className='beer-card-tagline'>{tagline}</p>
      <Link to={`/beer/${id}`} className='details-btn'>
        <button>DETAILS</button>
      </Link>
    </div>
  )
}