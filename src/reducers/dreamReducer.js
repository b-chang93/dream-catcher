function dreamReducer(state=[], action) {
  switch(action.type) {
    case 'ADD_DREAM':
      return [...state, {
        id: action.dream.id,
        title: action.dream.title,
        content: action.dream.content,
        creator: action.dream.creator,
        comments: action.dream.comments,
        private: action.dream.private
      }];
    case 'UPDATE_DREAM':
      let updatedDream = state.map((dream, index) => {
        return dream.id === action.dream.id ? action.dream : dream;
      });
      return [...updatedDream];
    case 'DELETE_DREAM':
      let filterDreams = state.filter(dream => dream.id !== action.id);
      return [...filterDreams]
    case 'FETCH_DREAM_SUCCESS':
      return [
        ...action.dreams
      ]
    default:
      return state;
  }
}
export default dreamReducer;
