import * as actions from '../actions/dream';
import * as actionComment from '../actions/comment';

// const initialState = {
//   dreams: [
//     {
//       dream: {
//         comments: []
//       }
//     }
//   ]
// };
const initialState = {
  dreams: []
};

export const dreamReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_DREAM) {
    return Object.assign({}, state, {
      dreams: [...state.dreams, {
        title: action.dream.title,
        content: action.dream.content,
        creator: action.dream.creator,
        comments: []
      }]
    });
  }
  else if (action.type === actionComment.ADD_COMMENT) {
    return Object.assign({}, state, {
      comments: [...action.dream.comments]
    });
  }
  else if (action.type === actions.UPDATE_DREAM) {
    let updatedDream = state.dreams.map((dream, index) => {
      return dream.id === action.dream.id ? action.dream : dream;
    });

    return Object.assign({}, state, {dreams: updatedDream});
  }
  else if (action.type === actions.FETCH_DREAM_SUCCESS) {
    return Object.assign({}, state, {
      dreams: [...action.dreams]
    });
  }
  console.log(state);
  return state;
};
