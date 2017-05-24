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

    constructor(props){

        super(props);
        this.state = {
            isHoverdOn: false,
            name:'woman',
        };
        this.handleHoverOn = this.handleHoverOn.bind(this);
        this.handleHoverOut = this.handleHoverOut.bind(this);
    }

    handleHoverOn(event) {
        this.setState(prevState => ({
            isHoverdOn: true,
            name: event,
        }));
    }

    handleHoverOut(event) {
        this.setState(prevState => ({
            isHoverdOn: false,
            name:'--',
        }));
    }

  render() {
    return (
      <div>
          <div>
              {this.state.name}
          </div>
        <NavBar>
            <HeaderLink onMouseOver={this.handleHoverOn.bind(this,'woman')} onMouseOut={this.handleHoverOut} to="/">
                <FormattedMessage {...messages.woman} />
            </HeaderLink>
            <HeaderLink onMouseOver={this.handleHoverOn.bind(this,'man')} onMouseOut={this.handleHoverOut} to="/features">
                <FormattedMessage {...messages.man} />
            </HeaderLink>
            <HeaderLink onMouseOver={this.handleHoverOn.bind(this,'xiangfen')} onMouseOut={this.handleHoverOut}  to="/xiangfen">
                <FormattedMessage {...messages.xiangfen} />
            </HeaderLink>
            <HeaderLink onMouseOver={this.handleHoverOn.bind(this,'caizhuang')} onMouseOut={this.handleHoverOut}  to="/caizhuang">
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
