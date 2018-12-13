import React from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import requiresLogin from '../../RequiresLogin';
import {clearAuth} from '../../../actions/auth';
import {clearAuthToken} from '../../../local-storage';
import './Logout.css';

export class LogOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn
    }
  };

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let signOutButton;
    if(this.props.loggedIn) {
      signOutButton =
        <button onClick={() => this.logOut()} className="sign_out">
          <span className="sign_out_icon"><FontAwesomeIcon icon="power-off" /></span>
        </button>
    }

    return (
      <div className="sign_out_container">
        {signOutButton}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default requiresLogin()(connect(mapStateToProps)(LogOut));
