import React from 'react';
import './PostForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      commenting: false,
      comments: false,
      content: this.props.content
    };

    this.onSubmit = this.onSubmit.bind(this);
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
      editing: !this.state.editing
    });
  };

  setCommenting() {
    this.setState({
      commenting: !this.state.commenting
    });
  };

  showComments() {
    this.setState({
      comments: !this.state.comments
    });
  };

  updateDreamContent(value){
    this.setState({
      content: value
    });
  }

  render() {
    const commentsOnPost = this.props.comments.map((comment, index) => {
      return(
        <ul className="all_comments" key={index}>
          <li className="user_comment" index={index}>{comment}</li>
        </ul>)
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
        <form className="post_form">
          <textarea placeholder="Leave a comment about the dream!"></textarea>
          <button className="btn comment">Leave Comment</button>
        </form>
        <h2 className="comments_section">Comments</h2>
        {commentsOnPost}
      </div>
    };

    if (enableEditing) {
      showEditBox =
      <div className="comment_container">
        <form className="post_form">
          <textarea value={this.state.content} onChange={e => this.updateDreamContent(e.target.value)}></textarea>
          <button className="btn comment">Edit</button>
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
