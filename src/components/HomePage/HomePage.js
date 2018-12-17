import React from 'react';
import './HomePage.css'
import logo from '../../assets/dreaming.png'
import IntroSection from './IntroSection/IntroSection'
import SignUp from './SignUp/SignUp'
import Login from './Login/Login'
import Demo from './Demo';
import Header from '../Header/Header.js'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showIntro: true,
      showLoginForm: false,
      showSignUpForm: false,
    };

    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
  }

  toggleLogin() {
    this.setState({
      showLoginForm: !this.state.showLoginForm,
      showSignUpForm: false
    });
  }

  toggleSignUp() {
    this.setState({
      showSignUpForm: !this.state.showSignUpForm,
      showLoginForm: false
    });
  }

  render() {
    return (
      <div className="HomePage">
        <div className="homepage-heading">
          <div className="button-group">
            <button
              onClick={this.toggleLogin}
              id="login"
              className="button access_button">
              Log In
            </button>
            <button
              onClick={this.toggleSignUp}
              id="signup"
              className="button access_button">
              Sign Up
            </button>
          </div>
          <main>
            {this.state.showLoginForm &&  <Login/>}
            {this.state.showSignUpForm &&  <SignUp/>}
          </main>
        </div>
        <div className="homepage_body">
          <div className="welcome_banner">
            <div className="demo_button_wraper">
              <h3>Never forget your dreams again.</h3>
              <div className="button-container">
                <Demo path={this.props} />
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
