import React, { Component } from 'react';
import './App.css';
import AppForm from '../AppForm/AppForm.js'
import Header from '../Header/Header.js'

class App extends Component {
  render() {
    return (
      <div className="row">
        <Header title='Dream Catcher'/>
        <AppForm />
      </div>
    );
  }
}

export default App;
