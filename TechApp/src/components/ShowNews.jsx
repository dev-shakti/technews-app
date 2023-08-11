import React from 'react'
import { useGlobalContext } from '../context/Context'

const ShowNews = () => {

  const {hits,isLoading,removePost}=useGlobalContext()
  
  if(isLoading){
    return <h2 style={{textAlign:"center"}}>Loading....</h2>
  }

  return (
    <div className='container'>
      <div className='grid'>
        {
          hits.map((currPost) => {
            return  <div className='card' key={currPost.objectID}>
            <h2>{currPost.title}</h2>
            <p> {currPost.author} <span>{currPost.num_comments} comments</span> </p>
            <div className='card-btns'>
              <a href={currPost.url} target="_blank" className='read-more'>Read more</a>
              <a href="#" className='remove' onClick={() => removePost(currPost.objectID)}
              >Remove</a>
            </div>
          </div>
          })
        }
       
      </div>
    </div>
  )
}

export default ShowNews
