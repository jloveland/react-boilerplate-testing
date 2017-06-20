/*
 * Example
 */
import React from 'react';
// import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Form from './Form';
import Button from 'components/Button';
import ReposList from 'components/List';
import messages from './messages';
import { callApi } from './actions';
import { makeSelectExample, makeSelectExampleLoading, makeSelectExampleError, makeSelectExampleResonse } from './selectors';
// import List from 'components/List';


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
        {/*<ReposList {...responseProps} />*/}
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
