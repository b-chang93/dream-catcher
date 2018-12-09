import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import Dream from './Dream/Dream';
import DreamForm from './DreamForm/DreamForm';
import {fetchProtectedData, fetchUser} from '../../actions/protected-data';
import {fetchDream} from '../../actions/dream';
import ScrollButton from './ScrollButton/ScrollButton'
import requiresLogin from '../RequiresLogin';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDream());
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchUser(this.props.username));
  }

  render() {
    let scrollBtn;
    const dreamsArray = this.props.dreamsList.dreams;
    if(dreamsArray.length > 1) {
      scrollBtn = <ScrollButton
      dreamsArray={dreamsArray}
      buttonText="Scroll to Top"
      onClick={window.scrollTo(0, 0)}/>
    }
    const dreams = dreamsArray.map((dream, index) => (
      <li className="post_item" key={index}>
        <Dream index={index} dream={dream} dispatch={this.props.dispatch}/>
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
    dreamsList: state.dreams,
    rootDreams: state.rootDreams.dreamReducer
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
