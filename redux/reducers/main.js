import * as t from '../types';


const main = (state = { name: "guest", loading: false, error: null, items: [] }, action) => {
    switch (action.type) {
        case t.SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case t.REGISTER:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                token: action.payload.token,
                loading: false,
                error: null
            };
        case t.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case t.SIGN_OUT:
            return {
                name: "guest",
                loading: false
            };
        case t.ERROR:
            return {
                ...state,
                error: action.payload
            };
        case t.GET_ITEMS:
            return {
                ...state,
                items: action.payload
            };
        case t.CREATE_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
                // items: state.items.concat(action.payload)
            };
        case t.DELETE_ITEM:
            return {
                ...state,
                items: action.payload
            };
        default:
            return { ...state }
    }
}

export default main;
