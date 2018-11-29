import React from 'react';
import './App.css';
import AppForm from '../AppForm/AppForm.js'
import Header from '../Header/Header.js'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp, faPen, faMobileAlt, faShareSquare, faBed, faComments, faTimesCircle, faEdit, faKey } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDoubleUp, faPen, faMobileAlt, faShareSquare, faBed, faComments, faTimesCircle, faEdit, faKey)

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="row">
          <Header title='Dream Catcher'/>
          <Route exact path="/" component={AppForm} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}
