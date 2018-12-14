import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import SignUpForm from './SignUpForm/SignUpForm';
// import AlertMessage from '../../../AlertMessage/AlertMessage';

function SignUp(props) {
    if (props.loggedIn) {
      // return <Redirect to="/dashboard" />;
    }
    return (
      <div className="home">
        <h2 className="access_form">Register</h2>
        <SignUpForm />
        <Link to="/">Login</Link>
      </div>
    );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUp);
