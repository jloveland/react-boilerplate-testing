import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './headerimage.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://github.com/Jonathan-Steinmann/react-boilerplate-testing">
          <Img src={Banner} alt="react-boilerplate-test - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/example">
            <FormattedMessage {...messages.example} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
