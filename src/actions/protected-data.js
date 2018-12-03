import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
  type: FETCH_PROTECTED_DATA_SUCCESS,
  data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
  type: FETCH_PROTECTED_DATA_ERROR,
  error
});

export const FETCH_DREAM_SUCCESS = 'FETCH_DREAM_SUCCESS';
export const fetchDreamSuccess = dreams => ({
  type: FETCH_DREAM_SUCCESS,
  dreams
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user
});

export const API_CREATE_DREAM= 'API_CREATE_DREAM';
export const apiCreateDream = (title, content) => ({
  type: API_CREATE_DREAM,
  title,
  content
});

export const API_UPDATE_DREAM= 'API_UPDATE_DREAM';
export const apiUpdateDream = (title, content) => ({
  type: API_UPDATE_DREAM,
  title,
  content
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected`, {
      method: 'GET',
      headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
      }
  })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
      .catch(err => {
        dispatch(fetchProtectedDataError(err));
      });
};

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
    content: content,
    creator: ''
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
        dispatch(apiCreateDream(dream));
      }
    });
}

export const updateDream = (title, content, id) => (dispatch, getState) => {
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
        window.location.reload();
        dispatch(apiCreateDream(dream));
      }
    });
}

export const fetchUser = (username) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/users/username/${username}`, {
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
      dispatch(fetchUserSuccess(dream));
    });
}
