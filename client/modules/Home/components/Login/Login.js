import React from 'react';
import PropTypes from 'prop-types';
import SocialButton from '../../../../components/SocialButton/SocialButton';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Login.css';

export function Login(props) {
  return (
    <div>
      {(!props.Logged) ?
        <div className={styles['login-container']}>
          <SocialButton
            className={styles.face}
            provider="facebook"
            appId="299960864082504"
            onLoginSuccess={props.handleSocialLogin}
            onLoginFailure={props.handleSocialLoginFailure}
          >
            <FormattedMessage id="loginface" />
          </SocialButton>
          <SocialButton
            className={styles.google}
            provider="google"
            appId="857907595806-sh2aoocrf34t4mn1ksqm3f6k68k16ebu.apps.googleusercontent.com"
            onLoginSuccess={props.handleSocialLogin}
            onLoginFailure={props.handleSocialLoginFailure}
          >
            <FormattedMessage id="logingoogle" />
          </SocialButton>
        </div> : <Link to="/" className={styles.logout} onClick={props.handleLogout}><FormattedMessage id="logout" /></Link>
      }
    </div>
  );
}

Login.propTypes = {
  Logged: PropTypes.bool,
  handleSocialLogin: PropTypes.func.isRequired,
  handleSocialLoginFailure: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Login;
