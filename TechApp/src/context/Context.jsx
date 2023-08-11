import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { useEffect } from "react";

const initialState={
   isLoading:true,
   query:"html",
   nbPages:0,
   page:0,
   hits:[]
}

const newsApi="https://hn.algolia.com/api/v1/search/?"

export const NewsContext=createContext()

export const NewsContextProvider = ({children}) => {

   const [state,dispatch]=useReducer(reducer,initialState)
   
   //fetching api to get data

   const fetchApiData = async(url) => {

      dispatch({
         type:"SET_LOADING",   
      })

      const res=await fetch(url)
      const data=await res.json()
      
      dispatch({
         type:"GET_NEWS",
         payload:{
            hits:data.hits,
            nbPages:data.nbPages
         }
      })

   }

   //delete Post
   const removePost = (id) => {
       dispatch({
         type:"DELETE_POST",
         payload:id
       })
   }

   //search Functionality
   const searchPost = (searchQuery) => {
     dispatch({
      type:"SEARCH_QUERY",
      payload:searchQuery
     })
   }

   //pagination Functionality
   const  getPrevPage =() => {
      dispatch({
         type:"SET_PREV_PAGE"
      })
   }

   const  getNextPage=() => {
      dispatch({
         type:"SET_NEXT_PAGE"
      })
   }

   useEffect(() => {
     fetchApiData(`${newsApi}query=${state.query}&page=${state.page}`)
   },[state.query,state.page])

   return <NewsContext.Provider value={
      {   ...state, 
         searchPost,
         removePost,
         getPrevPage, 
         getNextPage
      }}>
      {children}
      </NewsContext.Provider>
}

export const useGlobalContext = () => {

   return useContext(NewsContext)
}