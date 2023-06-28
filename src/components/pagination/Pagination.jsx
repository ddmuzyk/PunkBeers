import './Pagination.css'
import { Link } from 'react-router-dom'

export const Pagination = ({currentPageId}) => {

  const next = Number(currentPageId) + 1;
  const prev = Number(currentPageId) - 1;

  return (
    <div className="pagination-container">
      <Link to={`/page/${prev}`}>
        <button>Previous</button>
      </Link>
      <h3 className='pagination-page-num'>Page</h3>
      <Link to={`/page/${next}`}>
        <button>Next</button>
      </Link>
    </div>
  )
}