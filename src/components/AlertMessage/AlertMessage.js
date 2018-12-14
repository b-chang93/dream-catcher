import React from 'react';
import { Alert } from 'react-bootstrap';
import Login from '../HomePage/Login/Login'

export default class AlertMessage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    console.log(this.props)
    if (this.state.show) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
          <h4>{this.props.error}</h4>
        </Alert>
      );
    }

    return <Login/>;
  }
}
