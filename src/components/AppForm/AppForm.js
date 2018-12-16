import React from 'react';
import './AppForm.css'
import HomePage from '../HomePage/HomePage'
import Header from '../Header/Header.js'

export default class AppForm extends React.Component {
  render() {
    return (
      <div className="AppForm">
        <Header title="Dream Catcher"/>
        <HomePage {...this.props} />
      </div>
    );
  }
}
