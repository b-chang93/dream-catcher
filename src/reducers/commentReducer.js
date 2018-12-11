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
    case 'FETCH_COMMENT_SUCCESS':
      return [
        ...state, ...action.comments
      ]
    default:
      return state;
  }
};

export default commentReducer
