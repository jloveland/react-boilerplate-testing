/**
*
* Example
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function apiJSON({ loading, error, JSON }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }
  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (JSON !== false) {
    return <List items={JSON} />;
  }

  return null;
}

apiJSON.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  JSON: PropTypes.any,
};

export default apiJSON;
