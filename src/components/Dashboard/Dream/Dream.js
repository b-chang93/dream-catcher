import React from 'react';
import './Dream.css'
import Panel from '../Panel/Panel'
import {removeDream} from '../../../actions/dream';

export default class Dream extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false
    }
    this.showMenu = this.showMenu.bind(this);
    this.handleDeleteDream = this.handleDeleteDream.bind(this);
  }

  showMenu() {
    this.setState({
      menu: !this.state.menu
    })
  }

  handleDeleteDream(id) {
    this.props.dispatch(removeDream(id));
  }

  render() {
    // console.log(this.props.dream.creator._id)
    let showMenu;
    if(this.state.menu) {
      showMenu =
      <div className="menu">
        <ul className="options">
          <li>
            <button className="menu_btn delete" onClick={() => this.handleDeleteDream(this.props.dream.id)}>Delete</button>
          </li>
          <li>
            <button className="menu_btn private">Private</button>
          </li>
        </ul>
      </div>
    }

    // if(userId != )

    return(
      <div className="dream_panel">
        <div className="dream_info">
          <div className="dream_heading">
            <h2 className="dream_title">{this.props.dream.title}</h2>
            <div className="create-by">
              <img
              className="avatar"
              src={this.props.dream.creator.avatar}
              alt="user-avatar"/>
              <span className="creator">
                {this.props.dream.creator.firstName} {this.props.dream.creator.lastName}
              </span>
              <button className="menu_btn menu_options" onClick={this.showMenu}>...</button>
              {showMenu}
            </div>
          </div>
          <p className="story">{this.props.dream.content}</p>
        </div>
        <Panel
          userLoggedIn={this.props.userLoggedIn}
          dispatch={this.props.dispatch}
          dreamAuthor={this.props.dream.creator._id}
          dreamId={this.props.dream.id}
          title={this.props.dream.title}
          content={this.props.dream.content}
          comments={this.props.comments}/>
      </div>
    );
  }
};
