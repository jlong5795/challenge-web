'use strict';

import { combineReducers } from 'redux';

// Actions

import * as authActions from './auth/authActions';
import * as chatActions from './chat/chatActions';

export const actions = [
  authActions,
  chatActions
];

// Reducers

import auth from './auth/authReducer';
import chat from './chat/chatReducer';

export const rootReducer = combineReducers({
  auth,
  chat
});
