import * as t from '../types';


const history = (state = { text: "" }, action) => {
    switch (action.type) {
        case t.HISTORY_STATE:
            return {
                ...state
            };
        case t.CHANGE_HISTORY:
            return {
                ...state,
                text: action.payload.text
            };
        default:
            return { ...state }
    }
}

export default history;