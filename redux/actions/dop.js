import * as t from "../types"

export const getDop=(data)=>dispatch=>{
    dispatch({
        type: t.GRID_STATE,
        payload: data
    })
}
export const changeDop=(data)=>dispatch=>{
    dispatch({
        type: t.CHANGE_GRID,
        payload: data
    })
}