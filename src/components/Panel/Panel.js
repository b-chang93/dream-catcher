import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Panel.css'
import logo from '../../assets/dreaming.png'
import IntroSection from '../IntroSection/IntroSection'
import LoginForm from '../LoginForm/LoginForm'
import SignUpForm from '../SignUpForm/SignUpForm'

export default class Panel extends React.Component {
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
      showLoginForm: !this.state.showLoginForm
    });
  }

  toggleSignUp() {
    console.log(this.state.showSignUpForm)
    this.setState({
      showSignUpForm: !this.state.showSignUpForm
    });
  }

  render() {

    if(!this.state.showLoginForm) {

    } else if(this.state.showSignUpForm) {

    }

    return (
      <Router>
        <div className="Panel">
          <div className="panel-heading">
            <div className="btn-group">
              <button
                onClick={this.toggleLogin}
                id="login"
                className="btn">
                <Link className="access_button" to="/login">Log In</Link>
              </button>
              <button
                id="signup"
                className="btn">
                <Link className="access_button" to="/signup">Sign Up</Link>
              </button>
            </div>
            <main>
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/signup" component={SignUpForm} />
            </main>
          </div>
          <div className="panel_body">
            <div className="welcome_banner">
              <div className="demo_button_wraper">
                <h3>Never forget your dreams again.</h3>
                <div className="button-container">
                  <button className="demo btn">Demo Dreams</button>
                </div>
              </div>
              <div className="img-container">
                <img className="image" src={logo}/>
              </div>
            </div>
          </div>
          <IntroSection />
        </div>
      </Router>
    );
  }
}
