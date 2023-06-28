import './Pagination.css'

export const Pagination = () => {
  return (
    <div className="pagination-container">
      <button>Previous</button>
      <h3 className='pagination-page-num'>Page</h3>
      <button>Next</button>
    </div>
  )
}