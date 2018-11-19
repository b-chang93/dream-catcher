import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <div className="Header">
      <a className="jumbotron_title" href="/">{props.title}</a>
    </div>
  );
};
