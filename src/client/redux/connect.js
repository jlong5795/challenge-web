'use strict';

import { createStore, applyMiddleware, bindActionCreators, compose } from 'redux';
import { connect as reduxConnect } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { actions, rootReducer } from './index';

const logger = createLogger({
  collapsed: true,
  diff: true
});

const enhancer = compose(
  applyMiddleware(thunk, logger)
);

function mapDispatchToProps(dispatch) {
  const actionCreators = Object.assign({}, ...actions);

  return {
    actions: bindActionCreators(actionCreators, dispatch),
    dispatch
  };
}

export function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, enhancer);
};

/*
Example Component Usage:
import { connect } from './redux/connect';

export default connect((state) => ({
  email: state.auth.email
}))(MyEmailComponent);
*/
export default function connect(mapStateToProps) {
  return reduxConnect(mapStateToProps, mapDispatchToProps);
}
