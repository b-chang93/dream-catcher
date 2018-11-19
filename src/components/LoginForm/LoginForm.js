import React from 'react';
import './LoginForm.css'

export default function LoginForm() {
  return (
    <form className="LoginForm" role="form" acceptCharset="UTF-8" className="login-form" aria-live="assertive">
      <fieldset id="user-login">
        <legend>Log In</legend>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" name="username" className="username" required></input>
        <label htmlFor="user-password">Password</label>
        <input type="password" placeholder="password" name="password" className="user-password" required></input>
        <button className="login-button" type="submit">Log In</button>
      </fieldset>
    </form>
  );
};
