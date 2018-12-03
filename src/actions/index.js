import {API_BASE_URL} from '../config';

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

export const FETCH_DREAM_SUCCESS = 'FETCH_DREAM_SUCCESS';
export const fetchDreamSuccess = dreams => ({
  type: FETCH_DREAM_SUCCESS,
  dreams
});

export const fetchDream = () => dispatch => {
    fetch(`${API_BASE_URL}/dreams`)
      .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(dream => {
        dispatch(fetchDreamSuccess(dream));
      });
};
