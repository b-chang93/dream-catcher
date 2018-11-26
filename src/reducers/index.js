import * as actions from '../actions';

const initialState = {
  dreams: []
};

export const dreamReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_DREAM) {
    return Object.assign({}, state, {
      dreams: [...state.dreams, {
        title: action.title,
        content: action.content,
        comments: []
      }]
    });
  }
  else if (action.type === actions.ADD_COMMENT) {
    let dreams = state.dreams.map((dream, index) => {
      if (index !== action.dreamIndex) {
        return dream;
      }
      return Object.assign({}, dream, {
        comments: [...dream.comments, {
          text: action.text
        }]
      });
    });

    return Object.assign({}, state, {
      dreams
    });
  }
  else if (action.type === actions.FETCH_DREAM_SUCCESS) {
    return Object.assign({}, state, {
      dreams: [...action.dreams]
    });
  }
  return state;
};
