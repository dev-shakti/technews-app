import { useGlobalContext } from "../context/Context"

const Pagination = () => {

  const {page,nbPages,getPrevPage,getNextPage}=useGlobalContext();
 
  return (
    <div className="pagination">
      <button className='pagination-btn' onClick={() => getPrevPage()}>Prev</button>
      <p>{page+1} out of {nbPages}</p>
      <button  className='pagination-btn' onClick={() => getNextPage()}>Next</button>
    </div>
  )
}

export default Pagination
