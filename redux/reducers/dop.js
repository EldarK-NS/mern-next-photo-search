import * as t from '../types';


const dop = (state = { card: "card bg-dark text-white text-end card-square", img: "img-fluid img-square" }, action) => {
    switch (action.type) {
        case t.GRID_STATE:
            return {
                ...state
            };
        case t.CHANGE_GRID:
            return {
                ...state,
                card: action.payload.card,
                img: action.payload.img,
            };
        default:
            return { ...state }
    }
}

export default dop;
