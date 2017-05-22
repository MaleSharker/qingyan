import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
            <HeaderLink to="/">
               <FormattedMessage {...messages.woman} />
            </HeaderLink>
            <HeaderLink to="/features">
                <FormattedMessage {...messages.man} />
            </HeaderLink>
            <HeaderLink to="/xiangfen">
                <FormattedMessage {...messages.xiangfen} />
            </HeaderLink>
            <HeaderLink to="/caizhuang">
                <FormattedMessage {...messages.caizhuang} />
            </HeaderLink>
            <HeaderLink to="/hufu">
                <FormattedMessage {...messages.hufu} />
            </HeaderLink>
            <HeaderLink to="/zhubao">
                <FormattedMessage {...messages.zhubao} />
            </HeaderLink>
            <Link to="/">
                <Img src={Banner} alt="react-boilerplate - Logo" />
            </Link>
        </NavBar>
      </div>
    );
  }
}

export default Header;
