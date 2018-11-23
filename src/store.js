import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import {dreamReducer} from './reducers';

export default createStore(dreamReducer, applyMiddleware(thunk));
