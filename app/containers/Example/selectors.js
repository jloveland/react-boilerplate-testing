import { createSelector } from 'reselect';

/**
 * Direct selector to the example state domain
 */
const selectExampleDomain = () => (state) => state.get('example');

/**
 * Default selector used by Example
 */
const makeSelectExample = () => createSelector(
  selectExampleDomain(),
  (exampleState) => exampleState.toJS()
);

const makeSelectExampleLoading = () => createSelector(
  selectExampleDomain(),
  (exampleState) => exampleState.get('loading')
);

const makeSelectExampleError = () => createSelector(
  selectExampleDomain(),
  (exampleState) => exampleState.get('error')
);

const makeSelectExampleResonse = () => createSelector(
  selectExampleDomain(),
  (exampleState) => exampleState.getIn(['response'])
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (exampleState) => {
    const routingState = exampleState.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export default makeSelectExample;
export {
  selectExampleDomain,
  makeSelectExample,
  makeSelectExampleLoading,
  makeSelectExampleError,
  makeSelectExampleResonse,
  makeSelectLocationState,
};
