/*
 *
 * Example actions
 *
 */

import {
  DEFAULT_ACTION,
  CALL_API,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

/**
 * call event api
 */
export function callAPI() {
  return {
    type: CALL_API,
  };
}
