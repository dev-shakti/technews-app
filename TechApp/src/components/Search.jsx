import { useState } from "react";
import { useGlobalContext } from "../context/Context"

const Search = () => {

  const {query,searchPost}=useGlobalContext();

  return (
    <div className='searchInput'>
      <input type="text" 
      placeholder='search.....'
      value={query}
      onChange={(e) =>searchPost(e.target.value)}
     />
     <i class="fa-solid fa-magnifying-glass searchIcon"></i>
    </div>
  )
}

export default Search
