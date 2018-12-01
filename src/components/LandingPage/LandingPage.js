import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';

export function LandingPage(props) {
    if (props.loggedIn) {
        console.log('redirecting...')
        return  (
            <Redirect to="/dashboard" />)
    }
    return (
        <div className="home">
            <h2 className="access_form">Login</h2>
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
