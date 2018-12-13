import React from 'react';
import './Dream.css'
import Panel from '../Panel/Panel'
import {removeDream} from '../../../actions/dream';
import {privateDream} from '../../../actions/dream';
import { connect } from 'react-redux';
import { ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

export class Dream extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
      private: this.props.dream.private
    }
    this.showMenu = this.showMenu.bind(this);
    this.handleDeleteDream = this.handleDeleteDream.bind(this);
    this.privateDream = this.privateDream.bind(this);
  }

  showMenu() {
    this.setState({
      menu: !this.state.menu
    })
  }

  handleDeleteDream(id) {
    this.props.dispatch(removeDream(id));
  }

  privateDream(id) {
    this.setState({
      private: !this.state.private
    }, () =>
    this.props.dispatch(privateDream(this.state.private, id))
    )
  }

  render() {
    let privateDream;

    if(this.props.dream.private) {
      privateDream = 'Unprivate'
    } else {
      privateDream = 'Private'
    }

    let dreamAuthorId = this.props.dream.creator._id
    let optionsMenu = <button className="menu_btn menu_options" onClick={this.showMenu}>...</button>
    let showMenu;
    if(this.state.menu) {
      showMenu =
        <ul className="menu options dropdown-menu">
          <li>
            <button className="menu_btn delete" onClick={() => this.handleDeleteDream(this.props.dream.id)}>Delete</button>
          </li>
          <li>
            <button className="menu_btn private" onClick={() => this.privateDream(this.props.dream.id)}>{privateDream}</button>
          </li>
        </ul>
    }

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
              {this.props.userLoggedIn === dreamAuthorId? optionsMenu: null}
              {showMenu}
            </div>
          </div>
          <p className="story">{this.props.dream.content}</p>
        </div>
        <Panel
          userLoggedIn={this.props.userLoggedIn}
          dreamAuthor={this.props.dream.creator._id}
          dreamId={this.props.dream.id}
          title={this.props.dream.title}
          content={this.props.dream.content}
          comments={this.props.comments}
        />
      </div>
    );
  }
};

export default connect()(Dream);
