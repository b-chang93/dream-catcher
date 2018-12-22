import React from 'react';
import './Panel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {editDream} from '../../../actions/dream';
import {createComment} from '../../../actions/comment';
import {connect} from 'react-redux';
import Comments from './Comments/Comments';
import DemoDashboardModal from '../../DemoDashboardModal';

export class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      commenting: false,
      title: this.props.title,
      content: this.props.content,
      text: '',
      showTestMessage: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleUpdateDream = this.handleUpdateDream.bind(this);
    this.handleCreateComment = this.handleCreateComment.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  };

  closeAlert() { this.setState({ showTestMessage: false }); }

  onSubmit(event) {
    event.preventDefault();
    const text = this.textInput.value.trim();
    if (text && this.props.onAdd) {
      this.props.onAdd(this.textInput.value);
    };
    this.textInput.value = '';
  };

  setEditing() {
    this.setState({
      editing: !this.state.editing,
      commenting: false
    });
  };

  setCommenting() {
    this.setState({
      commenting: !this.state.commenting,
      editing: false
    });
  };

  updateDreamTitle(value){
    this.setState({
      title: value
    });
  };

  updateDreamContent(value){
    this.setState({
      content: value
    });
  };

  createComment(value){
    this.setState({
      text: value
    });
  };

  handleUpdateDream(event) {
    event.preventDefault();
    if(this.props.username === 'testuser') {
      this.setState({ showTestMessage: true });
    } else {
      const id = event.target.id
      const title = event.target.title.value;
      const content = event.target.content.value;
      this.props.dispatch(editDream(title, content, id));
      this.setEditing();
    }
  }

  handleCreateComment(event) {
    event.preventDefault();
    if(this.props.username === 'testuser') {
      this.setState({ showTestMessage: true });
    } else {
      const id = event.target.id;
      const comment = event.target.text.value;
      this.props.dispatch(createComment(comment, id));
    }
  }

  renderComments() {
    return this.props.comments
      .filter(comment => comment.dream === this.props.dreamId)
      .map((comment, index) => (
        <li className="user-comment" key={index}>
          <Comments userLoggedIn={this.props.userLoggedIn}comment={comment}/>
        </li>
    ));
  }

  render() {
    const numberComments = this.props.comments.filter(comment => comment.dream === this.props.dreamId).length;
    const enableEditing = this.state.editing;
    const enableComments = this.state.commenting;
    let showCommentBox;
    let showEditBox;

    if (enableComments) {
      showCommentBox =
      <div className="comment_container">
        <form id={this.props.dreamId} className="dream_form" onSubmit={this.handleCreateComment}>
          <textarea
            className="comment_box dream_updateable_fields"
            name="text"
            placeholder="Leave a comment about the dream!"
            value={this.state.text}
            onChange={e => this.createComment(e.target.value)}></textarea>
          <button className="button comment">Leave Comment</button>
        </form>
        <div className="comments_on_post">
          <h2 className="comments_header"><FontAwesomeIcon icon="comments"/> Comments</h2>
          <ul className="dreams_post_list">{this.renderComments()}</ul>
        </div>
      </div>
    };

    if ((this.props.userLoggedIn === this.props.dreamAuthor) && enableEditing) {
      showEditBox =
      <div className="comment_container">
        <form id={this.props.dreamId} className="dream_form" onSubmit={this.handleUpdateDream} >
          <input
            className="dream_title_field"
            name="title"
            value={this.state.title}
            onChange={e => this.updateDreamTitle(e.target.value)}></input>
          <textarea
            className="dream_updateable_fields"
            name="content"
            value={this.state.content}
            onChange={e => this.updateDreamContent(e.target.value)}></textarea>
          <button className="button comment">Save</button>
        </form>
      </div>
    }

    return(
      <div className="post_button_container">
        <DemoDashboardModal showModal={this.state.showTestMessage} closeAlert={this.closeAlert} />
        <button
          style={{ display: this.props.userLoggedIn !== this.props.dreamAuthor? 'none': 'inline'}}
          onClick={() => this.setEditing()}
          className="button post_edit_button">
          {!enableEditing ?
            <span className="post-icons"><FontAwesomeIcon icon="edit"/>Edit</span>:
            <span className="post-icons"><FontAwesomeIcon icon="times-circle"/>Close</span>}
        </button>
        <button
          style={{ width: this.props.userLoggedIn !== this.props.dreamAuthor? '100%': '50%'}}
          onClick={() => this.setCommenting()}
          className="button post_comment_button">{!enableComments ?
            <span className="post-icons"><FontAwesomeIcon icon="comments"/>Comment ({numberComments})</span>:
            <span className="post-icons"><FontAwesomeIcon icon="times-circle"/>Close</span>}
        </button>
        {showCommentBox}
        {showEditBox}
      </div>
    );
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  };
};
export default connect(mapStateToProps)(Panel);
