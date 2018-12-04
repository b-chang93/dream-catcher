import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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

export const fetchDream = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/dreams`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(dream => {
      dispatch(fetchDreamSuccess(dream));
    });
}

export const createDream = (title, content) => (dispatch, getState) => {
  const data = {
    title: title,
    content: content
  }
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/dreams`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return Promise.all([{status: res.status}, res.json()])
    })
    .then(dream => {
      if(dream.status === 201) {
        window.location.reload();
        dispatch(addDream(dream));
      }
    });
}

export const editDream = (title, content, id) => (dispatch, getState) => {
  const data = {
    title: title,
    content: content,
    creator: ''
  }
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/dreams/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return Promise.all([{status: res.status}, res.json()])
    })
    .then(dream => {
      if(dream.status === 201) {
        // window.location.reload();
        dispatch(updateDream(dream));
      }
    });
}
