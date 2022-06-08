import { Add_Todo } from "./action.types"

let initialSate={
    todos:[
        {
            id:1,
            title:"learn redux",
            status:false
        }
    ]
}

export const reducer = (state=initialSate,{type,payload})=>{
  switch(type){
     case Add_Todo:{
         return {...state,todos:[...state.todos,payload]}
     }
      default: {return state}
  }  
  
}