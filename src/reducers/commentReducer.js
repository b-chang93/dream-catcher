import * as actions from '../actions/comment';
// import dreamState from './dreamReducer';
import store from '../store';

const initialState = {
  dream: {
    comments: []
  }
};

export const commentReducer = (state=initialState, action) => {
  console.log(store.getState())
  if (action.type === actions.ADD_COMMENT) {
    console.log(action.dream.comments)
    return Object.assign({}, state, {
      dream: {
        comments: [...action.dream.comments]
      }
    });
  }
  console.log(state);
  return state;
};
