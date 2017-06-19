
import { fromJS } from 'immutable';
import exampleReducer from '../reducer';

describe('exampleReducer', () => {
  it('returns the initial state', () => {
    expect(exampleReducer(undefined, {})).toEqual(fromJS({}));
  });
});
