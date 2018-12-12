import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import Dream from './Dream/Dream';
import DreamForm from './DreamForm/DreamForm';
import {fetchProtectedData, fetchUser} from '../../actions/protected-data';
import {fetchDream} from '../../actions/dream';
import {fetchComment} from '../../actions/comment';
import ScrollButton from './ScrollButton/ScrollButton';
import requiresLogin from '../RequiresLogin';
import Header from '../Header/Header.js';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myDreams: false
    }
    this.toggleButton = this.toggleButton.bind(this);
    this.renderDreams = this.renderDreams.bind(this);
  }

  toggleButton() {
    this.setState({
      myDreams: !this.state.myDreams
    })
  }

  componentDidMount() {
    this.props.dispatch(fetchDream());
    this.props.dispatch(fetchComment());
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchUser(this.props.username));
  }

  renderDreams(showMyDreams, filterMyDreams) {
    if(!showMyDreams) {
      return this.props.dreams.map((dream, index) => (
        <li className="post_item" key={index}>
          <Dream
            userLoggedIn={this.props.loggedIn}
            signedIn={this.props.username}
            index={index}
            dream={dream}
            comments={this.props.comments.filter(comment => comment.dream === dream.id)}
          />
        </li>
      ));
    } else {
      return filterMyDreams.map((dream, index) => (
        <li className="post_item" key={index}>
          <Dream
            userLoggedIn={this.props.loggedIn}
            signedIn={this.props.username}
            index={index}
            dream={dream}
            comments={this.props.comments.filter(comment => comment.dream === dream.id)}
          />
        </li>
      ));
    }
  }

  render() {
    let dreamsArray = this.props.dreams;
    let filterMyDreams = dreamsArray.filter(dream => dream.creator._id === this.props.loggedIn)
    let showMyDreams = this.state.myDreams;

    return (
      <div className="Dashboard">
      <Header title='Dream Catcher' myDreams={this.state.myDreams} toggler={this.toggleButton}/>
        <div className="DreamContainer">
          <DreamForm/>
          <ul className="dreams_post_list">{this.renderDreams(showMyDreams, filterMyDreams)}</ul>
          <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        </div>
      </div>
    );
  }
};

Dashboard.defaultProps = {
  title: 'Dream Catcher'
};

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    loggedIn: state.auth.currentUser.id,
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    dreams: state.dreams,
    comments: state.comments,
    myDreams: state.showMyDreams
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
