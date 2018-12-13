function commentReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        id: action.comment.id,
        text: action.comment.text,
        creator: action.comment.creator,
        created: action.comment.created,
        dream: action.comment.dream._id
      }];
    case 'UPDATE_COMMENT':
      let updateComment = state.map((comment, index) => {
        return comment.id === action.comment.id ? action.comment : comment;
      });
      return [...updateComment];
    case 'DELETE_COMMENT':
      let filterComments = state.filter(comment => comment.id !== action.id);
        return [...filterComments]
    case 'FETCH_COMMENT_SUCCESS':
      return [
        ...state, ...action.comments
      ]
    default:
      return state;
  }
};

export default commentReducer
