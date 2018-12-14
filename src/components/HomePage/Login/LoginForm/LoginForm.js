import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../../../Input';
import {login} from '../../../../actions/auth';
import {required, nonEmpty} from '../../../../validators';
import AlertMessage from '../../../AlertMessage/AlertMessage';
import './LoginForm.css'

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false
    };

    this.closeAlert = this.closeAlert.bind(this);
  }

  onSubmit(values) {
    this.setState({
      showAlert: true
    });
    return this.props.dispatch(login(values.username, values.password));
  }

  closeAlert() { this.setState({ showAlert: false }); }

  render() {
    let error;
    console.log(this.props)
    if (this.props.error) {
      error = (
        <AlertMessage class="alert" showModal={this.state.showAlert} closeAlert={this.closeAlert} error={this.props.error}/>
      );
    }
    return (
      <div className="login_container">
        {error}
        <form
          className="LoginForm"
          onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values)
          )}>
          <label htmlFor="username">Username</label>
          <Field
            component={Input}
            type="text"
            name="username"
            id="username"
            validate={[required, nonEmpty]}
            placeholder="username"
            className="username"
            required
          />
          <label htmlFor="password">Password</label>
          <Field
            component={Input}
            type="password"
            name="password"
            id="password"
            validate={[required, nonEmpty]}
            placeholder="password"
            className="user-password"
            required
          />
          <button className="login-button" disabled={this.props.pristine || this.props.submitting}>
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
