import React from 'react';
import './Header.css';
import Logout from './Logout/Logout';
import Toggle from './Toggle/Toggle';

export default function Header(props) {
  return (
    <div className="Header">
      <a className="jumbotron_title" href="/dashboard">{props.title}</a>
      {(props.dashboard)? <Toggle toggler={props.toggler}/>: null}
      <Logout/>
    </div>
  );
};
