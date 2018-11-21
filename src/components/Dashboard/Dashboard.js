import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import DreamContainer from '../DreamContainer/DreamContainer'


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Dashboard">
        <header className="My_Dreams">My Dreams</header>
        <DreamContainer />
      </div>
    );
  }
};
