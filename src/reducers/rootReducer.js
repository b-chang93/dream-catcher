import {combineReducers} from 'redux';
import * as dreams from './dreamReducer';
import * as comments from './commentReducer';

const allReducers = Object.assign({}, dreams, {
  dreams: {
    comments
  }
});

export default combineReducers(allReducers);
