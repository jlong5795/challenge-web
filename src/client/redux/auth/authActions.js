'use strict';

import {
  AUTH_LOGIN
} from '../actionTypes';

export function authLogin(email) {
  return (dispatch, getState) => {
    // Misc stuff?

    dispatch({
      type: AUTH_LOGIN,
      payload: email
    });
  }
}
