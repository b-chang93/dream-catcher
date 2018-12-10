function commentReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        id: action.comment.id,
        text: action.comment.text,
        creator: action.comment.creator,
        created: action.comment.created
      }];
    case 'UPDATE_COMMENT':
      let updatedDream = state.map((dream, index) => {
        return dream.id === action.dream.id ? action.dream : dream;
      });
      return [...updatedDream];
    case 'DELETE_COMMENT':
      let filterDreams = state.filter(dream => dream.id !== action.id);
      return [...filterDreams]
    case 'FETCH_COMMENT_SUCCESS':
      return [
        ...state, ...action.comments
      ]
    default:
      return state;
  }
};

export default commentReducer
