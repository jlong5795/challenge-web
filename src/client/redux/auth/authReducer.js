'use strict';

import {
  AUTH_LOGIN
} from '../actionTypes';

const initial = {
  email: null
}

export default function authReducer(state = initial, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        //...
      }
  }
  
  return state;
}
