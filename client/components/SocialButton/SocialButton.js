import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SocialLogin from 'react-social-login';

class Button extends PureComponent {
  static propTypes = {
    triggerLogin: PropTypes.func.isRequired,
    triggerLogout: PropTypes.func,
    children: PropTypes.object.isRequired,
  }

  render() {
    const { children, triggerLogin, triggerLogout, ...props } = this.props;
    // console.log(triggerLogout); // eslint-disable-line no-console
    const style = {
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      borderRadius: '22px',
      margin: '5px',
      padding: '10px 20px',
    };

    return (
      <div onClick={triggerLogin} style={style} {...props}>
        {children}
      </div>
    );
  }
}
/* eslint new-cap: ["error", { "capIsNewExceptions": ["SocialLogin"] }]*/
export default SocialLogin(Button);
