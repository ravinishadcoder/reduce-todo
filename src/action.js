import { Add_Todo } from "./action.types";

export const addTodo=(payload)=>{
    return {
        type:Add_Todo,
        payload
    }
}