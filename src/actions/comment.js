import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const ADD_COMMENT= 'ADD_COMMENT';
export const addComment = (dream) => ({
  type: ADD_COMMENT,
  dream
});

export const createComment = (text, id) => (dispatch, getState) => {
  const data = {
    text: text
  }

  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/comments/dream/${id}`, {
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
      return res.json();
    })
    .then(comment => {
      dispatch(addComment(comment));
    });
}
