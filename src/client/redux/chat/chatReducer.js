'use strict';

import {
  CHAT_RECEIVED_MESSAGES
} from '../actionTypes';

const initial = {
  messages: []
};

export default function chatReducer(state = initial, action) {
  switch (action.type) {
    case CHAT_RECEIVED_MESSAGES:
      return {
        //...
      }
  }

  return state;
}
