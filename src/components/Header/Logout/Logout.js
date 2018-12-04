import React from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import requiresLogin from '../../RequiresLogin';
import './Logout.css';

export class LogOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn
    }
  };

  logout(){
    localStorage.clear();
    this.setState({
      loggedIn: false
    })
  }

  render() {
    console.log(this.props)
    console.log(this.state.loggedIn)
    let signOutButton;
    if(this.props.loggedIn) {
      signOutButton =
        <button onClick={() => this.logout()} className="sign_out">
          <span className="sign_out_icon"><FontAwesomeIcon icon="sign-out-alt" /></span>
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
