import * as t from "../types"

export const getSearch=(data)=>dispatch=>{
    dispatch({
        type: t.SEARCH_STATE,
        payload: data
    })
}
export const changeSearch=(data)=>dispatch=>{
    dispatch({
        type: t.CHANGE_SEARCH,
        payload: data
    })
}