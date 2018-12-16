import React from 'react';
import {connect} from 'react-redux';
import './HomePage.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard'
import {login} from '../../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class HomePage extends React.Component {

  demoMode() {
    this.setState({
      showDemo: true
    });
    this.props.dispatch(login('testuser', 'password123'));
    this.props.path.history.push('/dashboard')
  }

  render() {
    // <Route exact path="/dashboard" component={Dashboard} />
    // <Route exact path="/dashboard" render={(props) => (<Dashboard test="hi"/>)} />
    return(
      <Router>
        <button className="demo button" onClick={() => this.demoMode()}>
          <span className="homepage-icons"><FontAwesomeIcon icon="bed"/></span>Demo Dreams
          <Route
            exact path="/dashboard"
            render={() => <Dashboard test={true} />}
            test="hello" />
        </button>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    showDemo: false
  };
};

export default (connect(mapStateToProps)(HomePage));
