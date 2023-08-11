export const reducer = (state, action) => {

    switch (action.type) {

        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "GET_NEWS":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }

        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.payload
            }

        case "DELETE_POST":
            return {
                ...state,
                hits: state.hits.filter((currElem) => currElem.objectID !== action.payload)
            }

        case "SET_PREV_PAGE":
            let pageNumDec=state.page-1
           
            if(pageNumDec<=0){
                pageNumDec=0
            }
            return {
                ...state,
                page:pageNumDec
            }

        case "SET_NEXT_PAGE":
           let pageNumInc=state.page+1
           
           if(pageNumInc>=state.nbPages){
            pageNumInc=0
           }
            return {
                ...state,
                page:pageNumInc
            }



    }
    return state
}

