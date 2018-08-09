import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { loadState, saveState } from '../../localStorage';

import Road from './images/road.jpg';
import Logo from './images/logo.png';
import LogoCirculo from './images/logoconcirculo.png';
import Paso1Text from './images/paso1text.png';
import Paso1Number from './images/paso1num.png';
import Paso2Text from './images/paso2text.png';
import Paso2Number from './images/paso2num.png';
import Paso3Text from './images/paso3text.png';
import Paso3Number from './images/paso3num.png';
import Paso4Text from './images/paso4text.png';
import Paso4Number from './images/paso4num.png';
import Paso5Text from './images/paso5text.png';
import Paso5Number from './images/paso5num.png';
import Flecha from './images/flecha.jpg';


// Import Components
import Login from './components/Login/Login';
import TravelCreateWidget from '../Travel/components/TravelCreateWidget/TravelCreateWidget';
import Loading from '../../components/Loading/Loading';

// Import Actions
import { addUser, logoutUser, toggleAddTravel } from './HomeActions';
import { addTravelRequest, deleteTravelRequest } from '../Travel/TravelActions';


import { switchLanguage } from '../Intl/IntlActions';

// Import Style
import styles from './Home.css';

class Home extends Component {
  state = ({
    isLogged: false,
    isMounted: false,
  })
  componentWillMount() {
    if (localStorage) {
      loadState();
      console.log(localStorage)
      // this.props.dispatch(addUser(localStorage.state.user));
      this.setState({ isLogged: true });
    } else {
      this.setState({ isLogged: false });
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isMounted: true });
    }, 2000);
     // eslint-disable-line
  }
  toggleAddTravelSection = () => {
    this.props.dispatch(toggleAddTravel());
  };
  handleSocialLogoutSuccess = () => {
    try {
      this.props.dispatch(logoutUser());
      localStorage.removeItem('state');
      this.setState({ isLogged: false });
    } catch (err) {
      console.error(err);// eslint-disable-line no-console
    }
  }
  handleSocialLogin = (user) => {
    try {
      this.props.dispatch(addUser(user));
      this.setState({ isLogged: true });
      saveState(user._token);
    } catch (err) {
      console.error(err);// eslint-disable-line no-console
    }
  }
  handleSocialLoginFailure = (err) => {
    console.error(err);// eslint-disable-line no-console
  }
  handleDeleteTravel = travel => {
    if (confirm('Do you want to delete this travel?')) { // eslint-disable-line
      this.props.dispatch(deleteTravelRequest(travel));
    }
  };

  handleAddTravel = (from, to, date, plate, price, model, content) => {
    this.props.dispatch(toggleAddTravel());
    this.props.dispatch(addTravelRequest({ from, to, date, plate, price, model, content }));
  };
  render() {
    const Left = (
      <div className={styles['top-container']}>
        <div className={styles.circulo}>
          <div className={styles.emojis}>
            <img className={styles.logo} src={Logo} alt="TOBCITY logo" />
          </div>
        </div>
        <Login
          handleSocialLogin={this.handleSocialLogin}
          handleLogout={this.handleSocialLogoutSuccess}
          Logged={this.state.isLogged}
          handleSocialLoginFailure={this.handleSocialLoginFailure}
        />
      </div>
    );
    const RightDesktop = (
      <div className={styles['right-container']}>
        <img src={LogoCirculo} alt="Tobcity Logo" className={styles.logoRight} />
        <div className={styles['numbers-container']}>
          <img src={Road} alt="Road Tobcity" className={styles.road} />
          <div className={styles.paso1}>
            <img src={Paso1Text} alt="Paso 1 Tobcity" className={styles.paso1text} />
            <img src={Flecha} alt="Paso 1 Tobcity" className={styles.paso1flecha} />
            <img src={Paso1Number} alt="Paso 1 Tobcity" className={styles.paso1number} />
          </div>
          <div className={styles.paso2}>
            <img src={Paso2Number} alt="Paso 2 Tobcity" className={styles.paso2number} />
            <img src={Flecha} alt="Paso 2 Tobcity" className={styles.paso2flecha} />
            <img src={Paso2Text} alt="Paso 2 Tobcity" className={styles.paso2text} />
          </div>
        </div>
      </div>
    );
    const StepsMobile = (
      <div className={styles['stepsmob-container']}>
        <div className={styles.paso1mob}>
          <img src={Paso1Text} alt="Paso 1 Tobcity" className={styles.paso1textmob} />
          <img src={Paso1Number} alt="Paso 1 Tobcity" className={styles.paso1numbermob} />
        </div>
        <div className={styles.paso2mob}>
          <img src={Paso2Number} alt="Paso 2 Tobcity" className={styles.paso2numbermob} />
          <img src={Paso2Text} alt="Paso 2 Tobcity" className={styles.paso2textmob} />
        </div>
        <div className={styles.paso3mob}>
          <img src={Paso3Text} alt="Paso 3 Tobcity" className={styles.paso3textmob} />
          <img src={Paso3Number} alt="Paso 3 Tobcity" className={styles.paso3numbermob} />
        </div>
        <div className={styles.paso4mob}>
          <img src={Paso4Number} alt="Paso 4 Tobcity" className={styles.paso4numbermob} />
          <img src={Paso4Text} alt="Paso 4 Tobcity" className={styles.paso4textmob} />
        </div>
        <div className={styles.paso5mob}>
          <img src={Paso5Text} alt="Paso 5 Tobcity" className={styles.paso5textmob} />
          <img src={Paso5Number} alt="Paso 5 Tobcity" className={styles.paso5numbermob} />
        </div>
      </div>
    );
    console.log(this.props)
    return (
      <div className={styles['main-container']}>
        <Helmet
          title="Tobcity Divide tus gastos"
          titleTemplate="%s - Web App"
          meta={[
            { charset: 'utf-8' },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
        />
        {
          (this.state.isMounted) ?
            <div>
              <Header
                Logged={this.state.isLogged}
                switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
                intl={this.props.intl}
                toggleAddTravel={this.toggleAddTravelSection}
              />
              <TravelCreateWidget addTravel={this.handleAddTravel} showAddTravel={this.props.showAddTravel} />
              <div className={styles.container}>
                {Left}
                {RightDesktop}
                {StepsMobile}
              </div>
              <Footer />
            </div>
          : <Loading
            text="Tobcity, Divide tus gastos"
            speed="400"
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  user: store.home.user,
  intl: store.intl,
  showAddTravel: store.home.showAddTravel,
});

Home.propTypes = {
  children: PropTypes.object.isRequired,
  showAddTravel: PropTypes.bool.isRequired,
  dispatch: PropTypes.func,
  user: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Home);
