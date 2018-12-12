import {API_BASE_URL} from '../config';

export const ADD_COMMENT= 'ADD_COMMENT';
export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
});

export const UPDATE_COMMENT= 'UPDATE_COMMENT';
export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment
});

export const DELETE_COMMENT= 'DELETE_COMMENT';
export const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  comment
});

export const FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS';
export const fetchCommentSuccess = comments => ({
  type: FETCH_COMMENT_SUCCESS,
  comments
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

export const fetchComment = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/comments`, {
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
    .then(comment => {
      dispatch(fetchCommentSuccess(comment));
    });
}
