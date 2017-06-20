/*
 * Example
 */
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import ExampleJson from 'components/ExampleJson';
import Button from 'components/Button';
import messages from './messages';
import { callApi } from './actions';
import { makeSelectExample, makeSelectExampleLoading, makeSelectExampleError, makeSelectExampleResonse } from './selectors';

export class Example extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // if you wanted to make API call on load
  // componentDidMount() {
  //   this.props.makeCall();
  // }

  render() {
    const { loading, error, response } = this.props;
    const responseProps = {
      loading,
      error,
      response,
    };

    let buttonText = <FormattedMessage {...messages.buttonText} />;
    if (response !== false) {
      buttonText = <FormattedMessage {...messages.buttonTextSuccess} />;
    }

    return (
      <div>
        <Button onClick={this.props.makeCall}>{buttonText}</Button>
        <ExampleJson {...responseProps} />
        <br />
      </div>
    );
  }
}

Example.propTypes = {
  makeCall: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  response: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  example: makeSelectExample(),
  loading: makeSelectExampleLoading(),
  error: makeSelectExampleError(),
  response: makeSelectExampleResonse(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    makeCall: () => {
      dispatch(callApi());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
