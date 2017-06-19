/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CALL_API,
} from './constants';

const initialState = fromJS({});

function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case CALL_API:
      return state
        .setIn(['apiCall'], true);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default exampleReducer;
