import * as actions from '../actions/dream';

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
  else if (action.type === actions.UPDATE_DREAM) {
    let updatedDream = state.dreams.map((dream, index) => {
      return dream.id === action.dream.id ? action.dream : dream;
    });

    return Object.assign({}, state, {dreams: updatedDream});
  }
  else if (action.type === actions.DELETE_DREAM) {
    let filterDreams = state.dreams.filter(dream => dream.id !== action.id);
    return Object.assign({}, state, {
      dreams: filterDreams
    });
  }
  else if (action.type === actions.FETCH_DREAM_SUCCESS) {
    return Object.assign({}, state, {
      dreams: [...action.dreams]
    });
  }
  return state;
};
