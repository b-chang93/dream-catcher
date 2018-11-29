import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect, Switch, Router, Route} from 'react-router-dom';

import LoginForm from '../LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard'

export function LandingPage(props) {
    if (props.loggedIn) {
        console.log('redirecting...')
        return  (
            <Redirect to="/dashboard" />)
    }
    return (
        <div className="home">
            <h2>Hello World</h2>
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
