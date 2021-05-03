import main from './main';
import dop from './dop';
import search from './search';
import history from './history';

import { combineReducers } from 'redux'

const rootReducer = combineReducers({ main: main, dop: dop, search: search, history: history })

export default rootReducer;
