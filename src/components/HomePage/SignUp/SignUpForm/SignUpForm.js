import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../../../actions/users';
import {login} from '../../../../actions/auth';
import Input from '../../../Input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../../../validators';
import AlertMessage from '../../../AlertMessage/AlertMessage';
const usernameLength = length({min: 5, max: 15});
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false
    };

    this.closeAlert = this.closeAlert.bind(this);
  }

  closeAlert() { this.setState({ showAlert: false }); }

  onSubmit(values) {
    const {username, password, firstName, lastName} = values;
    const user = {username, password, firstName, lastName};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <AlertMessage class="alert" showModal={this.state.showAlert} closeAlert={this.closeAlert} error={this.props.error}/>
      );
    }

    return (
      <div className="signup_container">
        {error}
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <label htmlFor="firstName">First name</label>
          <Field
            className="user-first-name"
            component={Input}
            type="text"
            name="firstName"
            placeholder="First Name"/>
          <label htmlFor="lastName">Last name</label>
          <Field
            className="user-last-name"
            component={Input}
            type="text"
            name="lastName"
            placeholder="Last Name"/>
          <label htmlFor="username">Username</label>
          <Field
            className="signup-username"
            component={Input}
            type="text"
            name="username"
            validate={[required, usernameLength, isTrimmed]}
            placeholder="username"
          />
          <label htmlFor="password">Password</label>
          <Field
            className="signup-user-password"
            component={Input}
            type="password"
            name="password"
            validate={[required, passwordLength, isTrimmed]}
            placeholder="password"
          />
          <label htmlFor="passwordConfirm">Confirm password</label>
          <Field
            component={Input}
            type="password"
            name="passwordConfirm"
            validate={[required, nonEmpty, matchesPassword]}
            placeholder="confirm password"
          />
          <button
            type="submit"
            className="login-button"
            disabled={this.props.pristine || this.props.submitting}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
      dispatch(focus('registration', Object.keys(errors)[0]))
})(SignUpForm);
