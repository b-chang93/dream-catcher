import * as actions from '../actions';

const initialState = {
  dreams: [
    {
      title: 'Example Dream 1',
      content: 'Example 1 content of the dream',
      comments: [
        {text: 'Example comment 1'},
        {text: 'Example comment 2'}
      ]
    },
    {
      title: 'Example Dream 2',
      content: 'Example 2 content of the dream',
      comments: [
        {text: 'Example comment 1'},
        {text: 'Example comment 2'}
      ]
    }
  ]
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
  return state;
};
