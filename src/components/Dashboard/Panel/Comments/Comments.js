import React from 'react';
import './Comment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {removeComment} from '../../../../actions/comment';
import {connect} from 'react-redux';
import DemoDashboardModal from '../../../DemoDashboardModal';

export class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTestMessage: false,
      commentMenu: false
    };
    this.optionsMenu = this.optionsMenu.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  };

  closeAlert() { this.setState({ showTestMessage: false }); }

  showCommentMenu() {
    this.setState({
      commentMenu: !this.state.commentMenu
    })
  }

  handleDeleteComment(id) {
    if(this.props.username === 'testuser') {
      this.setState({ showTestMessage: true });
    } else {
      this.props.dispatch(removeComment(id));
    }
  }

  optionsMenu(id) {
    let showMenu =
      <ul className="menu options comment-dropdown-menu">
        <li>
          <button className="menu_button delete" onClick={() => this.handleDeleteComment(id)}>Delete</button>
        </li>
      </ul>

    return (
      <div
        className="comment_menu_button menu_options"
        id={id}
        onClick={() => this.showCommentMenu()}>...
        {(this.state.commentMenu)? showMenu: null}
      </div>)
  }

  render() {
    return(
      <div className="comment">
      <DemoDashboardModal showModal={this.state.showTestMessage} closeAlert={this.closeAlert} />
        <img
          src={this.props.comment.creator.avatar}
          className="user_avatar_in_comment"
          alt="user-avatar"
        />
        <div className="comment_text">
          <p><span className="commentor">{this.props.comment.creator.firstName} {this.props.comment.creator.lastName} </span>{this.props.comment.text}</p>
        </div>
        {this.props.userLoggedIn === this.props.comment.creator._id? this.optionsMenu(this.props.comment.id): null}
      </div>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  };
};
export default connect(mapStateToProps)(Comments);
