import React from 'react';
import './SignUpForm.css'

export default function SignUpForm() {
  return (
    <form className="SignUpForm" role="form" acceptCharset="UTF-8" className="signup-form" aria-live="assertive">
      <fieldset id="user-signup">
        <legend>Sign Up</legend>
        <input type="text" placeholder="first name" name="first-name" className="user-first-name" required/>
        <input type="text" placeholder="last name" name="last-name" className="user-last-name" required/>
        <input type="text" placeholder="username" name="username" className="signup-username" required/>
        <input type="password" placeholder="password" name="password" className="signup-user-password" required/>
        <button className="signup" type="submit">Sign Up</button>
      </fieldset>
    </form>
  );
};
