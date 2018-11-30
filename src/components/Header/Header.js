import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header(props) {
  return (
    <div className="Header">
      <a className="jumbotron_title" href="/">{props.title}</a>
        <button className="sign_out">
          <span className="sign_out_icon"><FontAwesomeIcon icon="sign-out-alt" /></span>
        </button>
    </div>
  );
};
