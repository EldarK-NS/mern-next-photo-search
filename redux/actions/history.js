import * as t from "../types"

export const getHistory=(data)=>dispatch=>{
    dispatch({
        type: t.HISTORY_STATE,
        payload: data
    })
}
export const changeHistory=(data)=>dispatch=>{
    dispatch({
        type: t.CHANGE_HISTORY,
        payload: data
    })
}