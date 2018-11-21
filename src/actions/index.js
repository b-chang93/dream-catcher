export const ADD_DREAM= 'ADD_DREAM';
export const addDream = (title, text) => ({
    type: ADD_DREAM,
    title,
    text
});

export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (text, dreamIndex) => ({
    type: ADD_COMMENT,
    text,
    dreamIndex
});

export const UPDATE_DREAM = 'UPDATE_DREAM';
export const updateDream = (text, dreamIndex) => ({
  type: UPDATE_DREAM,
  text,
  dreamIndex
});

export const DELETE_DREAM = 'DELETE_DREAM';
export const deleteDream = (text, dreamIndex) => ({
  type: DELETE_DREAM,
  text,
  dreamIndex
});
