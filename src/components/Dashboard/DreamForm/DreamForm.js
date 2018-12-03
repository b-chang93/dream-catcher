import React from 'react';
import './DreamForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {createDream} from '../../../actions/protected-data';

export default class DreamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createDream: false,
      dreams: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  };

  handleSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    this.props.dreamDetails.dispatch(createDream(title, content));
  }

  // handleChange(event) {
  //  this.setState({ [event.target.name]: event.target.value });
  // }

  render() {
    const enableCreateDream = this.state.createDream;
    let showCreateDreamField;

    if (enableCreateDream) {
      showCreateDreamField =
      <div className="comment_container">
        <form className="dream_form"
        onSubmit={this.handleSubmit}>
          <input
            ref={input => this.textInput = input}
            className="title_your_dream"
            placeholder="Title"
            name="title"
            className="dream_title_field">
          </input>
          <textarea
          name="content"
          placeholder="Write about your dream here!"
          class="create_dream_content"
          ></textarea>
          <button type="submit" className="btn create">Dream</button>
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
