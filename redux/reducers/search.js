import * as t from '../types';


const search = (state = { text: "" }, action) => {
    switch (action.type) {
        case t.SEARCH_STATE:
            return {
                ...state
            };
        case t.CHANGE_SEARCH:
            return {
                ...state,
                text: action.payload.text
            };
        default:
            return { ...state }
    }
}

export default search;