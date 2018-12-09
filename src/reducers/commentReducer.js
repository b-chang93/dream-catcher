import * as actions from '../actions/comment';
const initialState = {
  comments: [

  ]
};

export const commentReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_COMMENT) {
    return Object.assign({}, state, {comments: action.comment});
  }
  return state;
};
