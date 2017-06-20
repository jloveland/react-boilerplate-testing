/*
 * Example
 */
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import JSONPretty from 'react-json-pretty';
import Button from 'components/Button';
import Form from './Form';
import messages from './messages';
import { callApi } from './actions';
import { makeSelectExample, makeSelectExampleLoading, makeSelectExampleError, makeSelectExampleResonse } from './selectors';


export class Example extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // if you wanted to make api call on load
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

    return (
      <div>
        <FormattedMessage {...messages.header} />
        <Form>
          <Button onClick={this.props.makeCall}>Call API!</Button>
        </Form>
        <JSONPretty id="response" json={response}></JSONPretty>
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
