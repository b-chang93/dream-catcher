import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const API_CREATE_COMMENT= 'API_CREATE_COMMENT';
export const apiCreateComment = (text) => ({
  type: API_CREATE_COMMENT,
  text
});

export const createComment = (text, id) => (dispatch, getState) => {
  const data = {
    text: text,
    creator: ''
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
      return Promise.all([{status: res.status}, res.json()])
    })
    .then(comment => {
      if(comment.status === 201) {
        // window.location.reload();
        dispatch(apiCreateComment(comment));
      }
    });
}
