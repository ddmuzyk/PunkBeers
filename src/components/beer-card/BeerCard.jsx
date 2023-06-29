import './BeerCard.css';
import { Link } from 'react-router-dom';

export const BeerCard = ({imgUrl, name, tagline, id}) => {
  return (
    <div className="beer-card-container">
      <div className='beer-card-img-container'>
        <img className='beer-card-img' src={imgUrl} alt='Beer Card'/>
      </div>
      <h3 className='beer-card-name'>{name}</h3>
      <hr></hr>
      <p className='beer-card-tagline'>{tagline}</p>
      <div className='details-btn-container'>
        <Link to={`/beer/${id}`}>
          <button className='details-btn'>DETAILS</button>
        </Link>
      </div>
    </div>
  )
}