import React from 'react';
import './DreamForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class DreamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createDream: false
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

  setCreateDream() {
    this.setState({
      createDream: !this.state.createDream
    });
  };;

  render() {
    const enableCreateDream = this.state.createDream;
    let showCreateDreamField;

    if (enableCreateDream) {
      // enableEditing = false;
      showCreateDreamField =
      <div className="comment_container">
        <form className="post_form">
          <input className="title_your_dream" placeholder="Title"></input>
          <textarea placeholder="Write about your dream here!"></textarea>
          <button className="btn create">Dream</button>
        </form>
      </div>
    };

    return(
      <div className="dream_button_container">
        <button
          onClick={() => this.setCreateDream()}
          className="btn create">
          {!enableCreateDream ?
            <span className="post-icons"><FontAwesomeIcon icon="edit"/>Dream</span>:
            <span className="post-icons"><FontAwesomeIcon icon="times-circle"/>Close</span>}
        </button>
        {showCreateDreamField}
      </div>
    );
  };
};
