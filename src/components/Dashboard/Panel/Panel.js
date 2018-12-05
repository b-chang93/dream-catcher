import React from 'react';
import './Panel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {editDream} from '../../../actions/dream';
import {createComment} from '../../../actions/comment';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      commenting: false,
      comments: false,
      title: this.props.title,
      content: this.props.content,
      text: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleUpdateDream = this.handleUpdateDream.bind(this);
    this.handleCreateComment = this.handleCreateComment.bind(this);
  };

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

  showComments() {
    this.setState({
      comments: !this.state.comments
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
    const id = event.target.id
    const title = event.target.title.value;
    const content = event.target.content.value;
    this.props.dispatch(editDream(title, content, id));
  }

  handleCreateComment(event) {
    event.preventDefault();
    const user = this.props.userId
    const id = event.target.id;
    const comment = event.target.text.value;
    this.props.dispatch(createComment(comment, id));
  }

  render() {
    const commentsOnPost = this.props.comments.map((comment, index) => {
      return(
        <div className="all_comments" key={index}>
          <div className="user_comment" index={index}>
            <img
              src={comment.creator.avatar}
              className="user_avatar_in_comment"
              alt="user-avatar"
            />
            <div className="comment_text">{comment.creator.firstName} {comment.creator.lastName} {comment.text}</div>
          </div>
        </div>)
    });
    const numberComments = this.props.comments.length;
    const enableEditing = this.state.editing;
    const enableComments = this.state.commenting;
    let showCommentBox;
    let showEditBox;

    const showComments = this.state.comments;
    let commentsList;

    if (enableComments) {
      showCommentBox =
      <div className="comment_container">
        <form id={this.props.dreamId} className="dream_form" onSubmit={this.handleCreateComment}>
          <textarea
            className="dream_updateable_fields"
            name="text"
            placeholder="Leave a comment about the dream!"
            value={this.state.text}
            onChange={e => this.createComment(e.target.value)}></textarea>
          <button className="btn comment">Leave Comment</button>
        </form>
        <h2 className="comments_section">Comments</h2>
        {commentsOnPost}
      </div>
    };

    if (enableEditing) {
      showEditBox =
      <div className="comment_container">
        <form id={this.props.dreamId} className="dream_form" onSubmit={this.handleUpdateDream}>
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
          <button className="btn comment">Save</button>
        </form>
      </div>
    };



    return(
      <div className="post_button_container">
        <button
          onClick={() => this.setEditing()}
          className="btn post_edit_btn">
          {!enableEditing ?
            <span className="post-icons"><FontAwesomeIcon icon="edit"/>Edit</span>:
            <span className="post-icons"><FontAwesomeIcon icon="times-circle"/>Close</span>}
        </button>
        <button
          onClick={() => this.setCommenting()}
          className="btn post_comment_btn">{!enableComments ?
            <span className="post-icons"><FontAwesomeIcon icon="comments"/>Comment ({numberComments})</span>:
            <span className="post-icons"><FontAwesomeIcon icon="times-circle"/>Close</span>}
        </button>
        {showCommentBox}
        {showEditBox}
      </div>
    );
  };
};
