import './Pagination.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import left from '../../styles/svg/left.svg'
import right from '../../styles/svg/right.svg'

export const Pagination = ({currentPageId}) => {

  const current = Number(currentPageId);
  const [prev, setPrev] = useState(current - 1);
  const [next, setNext] = useState(current + 1);

  // Ternary operators regarding Link components help to handle pagination edge cases,
  // for example prevent going to "/page/0" - which would cause an error.

  return (
    <div className="pagination-container">
    {current !== 1 ? (
      <Link to={current === 2 ? '/' : `/page/${prev}`}>
        <button className='previous round'>&#8249;</button>
        {/* <img className='left-arrow' src={left}/> */}
      </Link>
    ) : null}
      <h3 className='pagination-page-num'>Page {current}</h3>
      <Link to={current === 37 ? '/' : `/page/${next}`}>
      <button className='next round'>&#8250;</button>
      {/* <img className='left-arrow' src={right}/> */}
      </Link>
    </div>
  )
}