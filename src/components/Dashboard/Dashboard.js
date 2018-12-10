import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import Dream from './Dream/Dream';
import DreamForm from './DreamForm/DreamForm';
import {fetchProtectedData, fetchUser} from '../../actions/protected-data';
import {fetchDream} from '../../actions/dream';
import {fetchComment} from '../../actions/comment';
import ScrollButton from './ScrollButton/ScrollButton'
import requiresLogin from '../RequiresLogin';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDream());
    this.props.dispatch(fetchComment());
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchUser(this.props.username));
  }

  render() {
    const dreamsArray = this.props.dreams;
    const dreams = dreamsArray.map((dream, index) => (
      <li className="post_item" key={index}>
        <Dream
          index={index}
          dream={dream}
          comments={this.props.comments.filter(comment => comment.dream === dream.id)}
          dispatch={this.props.dispatch}/>
      </li>
    ));

    return (
      <div className="Dashboard">
        <div className="DreamContainer">
          <DreamForm dispatch={this.props.dispatch}/>
          <ul className="dreams_post_list">{dreams}</ul>
          <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        </div>
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
    dreams: state.dreams,
    comments: state.comments
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
