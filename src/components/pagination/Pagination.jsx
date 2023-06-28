import './Pagination.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export const Pagination = ({currentPageId}) => {

  // const next = Number(currentPageId) + 1;
  const current = Number(currentPageId);
  const [prev, setPrev] = useState(current - 1);
  const [next, setNext] = useState(current + 1);

  return (
    <div className="pagination-container">
    {current !== 1 ? (
      <Link to={current === 2 ? '/' : `/page/${prev}`}>
        <button>Previous</button>
      </Link>
    ) : null}
      <h3 className='pagination-page-num'>Page {currentPageId}</h3>
      <Link to={current === 37 ? '/' : `/page/${next}`}>
        <button>Next</button>
      </Link>
    </div>
  )
}