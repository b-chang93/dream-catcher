import React from 'react';
import './DreamForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {createDream} from '../../../actions/dream';
import { connect } from 'react-redux';
import DemoDashboardModal from '../../DemoDashboardModal';

export class DreamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createDream: false,
      showTestMessage: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleDreamCreation = this.handleDreamCreation.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  };

  onSubmit(event) {
    event.preventDefault();
    const text = this.textInput.value.trim();
    if (text && this.props.onAdd) {
      this.props.onAdd(this.textInput.value);
    };
    this.textInput.value = '';
  };

  closeAlert() { this.setState({ showTestMessage: false }); }

  setCreateDream() {
    this.setState({
      createDream: !this.state.createDream
    });

  };

  handleDreamCreation(event) {
    event.preventDefault();
    if(this.props.username === 'testuser') {
      this.setState({ showTestMessage: true });
    } else {
      const title = event.target.title.value;
      const content = event.target.content.value;
      this.props.dispatch(createDream(title, content));
      this.setCreateDream();
    }
  }

  render() {
    const enableCreateDream = this.state.createDream;
    let showCreateDreamField;

    if (enableCreateDream) {
      showCreateDreamField =
        <form className="dream_form"
          onSubmit={this.handleDreamCreation}>
          <input
            ref={input => this.textInput = input}
            className="title_your_dream dream_title_field"
            placeholder="Title"
            name="title">
          </input>
          <textarea
            name="content"
            placeholder="Write about your dream here!"
            className="create_dream_content"
          ></textarea>
          <button type="submit" className="button create">Log Dream</button>
        </form>
    };

    return(
      <div className="dream_button_container">
        <DemoDashboardModal showModal={this.state.showTestMessage} closeAlert={this.closeAlert} />
        <button
          onClick={() => this.setCreateDream()}
          className="button create">
          {!enableCreateDream ?
            <span className="post-icons"><FontAwesomeIcon icon="edit"/>Create Dream</span>:
            <span className="post-icons"><FontAwesomeIcon icon="times-circle"/>Close</span>}
        </button>
        {showCreateDreamField}
      </div>
    );
  };
};

export default connect()(DreamForm);
