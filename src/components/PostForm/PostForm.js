import React from 'react';
import './PostForm.css'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      commenting: false
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

  render() {
    const enableEditing = this.state.editing;
    const enableComments = this.state.commenting;
    let showCommentButton;

    if (enableComments) {
     showCommentButton =
     <div className="comment_container">
      <form className="post_form">
        <textarea placeholder="Leave a comment about the dream!"></textarea>
        <button className="btn comment">Leave Comment</button>
      </form>
     </div>
    };



    return(
      <div className="post_button_container">
        <button
          onClick={() => this.setEditing()}
          className="btn post_edit_btn">{!enableEditing ? 'Edit': 'Close'}
        </button>
        <button
          onClick={() => this.setCommenting()}
          className="btn post_comment_btn">{!enableComments ? 'Comment': 'Close'}
        </button>
        {showCommentButton}
      </div>
    );
  };
};
