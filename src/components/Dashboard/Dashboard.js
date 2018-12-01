import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import DreamContainer from '../DreamContainer/DreamContainer'
import {fetchProtectedData, fetchDream, fetchUser} from '../../actions/protected-data';
import requiresLogin from '../RequiresLogin';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDream());
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchUser(this.props.username));
  }

  render() {
    return (
      <div className="Dashboard">
        <DreamContainer fetchedData={this.props.dreams}/>
      </div>
    );
  }
};

Dashboard.defaultProps = {
  title: 'Dream Board'
};

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    dreams: state.dreams
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
