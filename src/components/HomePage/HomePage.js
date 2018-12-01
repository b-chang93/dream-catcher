import React from 'react';
import './HomePage.css'
import logo from '../../assets/dreaming.png'
import IntroSection from './IntroSection/IntroSection'
import RegistrationPage from '../RegistrationPage/RegistrationPage'
import LandingPage from '../LandingPage/LandingPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showIntro: true,
      showLoginForm: false,
      showSignUpForm: false
    };

    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
  }

  toggleLogin() {
    console.log(this.state.showLoginForm)
    this.setState({
      showLoginForm: !this.state.showLoginForm,
      showSignUpForm: false
    });
  }

  toggleSignUp() {
    console.log(this.state.showSignUpForm)
    this.setState({
      showSignUpForm: !this.state.showSignUpForm,
      showLoginForm: false
    });
  }

  render() {
    return (
      <div className="HomePage">
        <div className="homepage-heading">
          <div className="btn-group">
            <button
              onClick={this.toggleLogin}
              id="login"
              className="btn access_button">
              Log In
            </button>
            <button
              onClick={this.toggleSignUp}
              id="signup"
              className="btn access_button">
              Sign Up
            </button>
          </div>
          <main>
            {this.state.showLoginForm &&  <LandingPage/>}
            {this.state.showSignUpForm &&  <RegistrationPage/>}
          </main>
        </div>
        <div className="homepage_body">
          <div className="welcome_banner">
            <div className="demo_button_wraper">
              <h3>Never forget your dreams again.</h3>
              <div className="button-container">
                <button className="demo btn">
                <span className="homepage-icons"><FontAwesomeIcon icon="bed"/></span>Demo Dreams</button>
              </div>
            </div>
            <div className="img-container">
              <img className="image" src={logo} alt="app-logo"/>
            </div>
          </div>
        </div>
        <IntroSection />
      </div>
    );
  }
}
