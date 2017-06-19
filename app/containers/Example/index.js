/*
 * Example
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Button from 'components/Button';
import Form from './Form';
import { callAPI } from './actions';
import makeSelectExample from './selectors';
import messages from './messages';

export class Example extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // if you wanted to make api call on load
  // componentDidMount() {
  //   this.props.makeCall();
  // }

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <Form>
          <Button onClick={this.props.makeCall}>Call API!</Button>
        </Form>
      </div>
    );
  }
}


Example.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  makeCall: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  example: makeSelectExample(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    makeCall: () => {
      dispatch(callAPI());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
