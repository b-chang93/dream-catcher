import React from 'react';
import './App.css';
import AppForm from '../AppForm/AppForm.js'
// import Header from '../Header/Header.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleUp, faPen, faMobileAlt, faShareSquare, faBed, faComments, faTimesCircle, faEdit, faPowerOff, faKey } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDoubleUp, faPen, faMobileAlt, faShareSquare, faBed, faComments, faTimesCircle, faEdit, faPowerOff, faKey)
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="row">
          <Route exact path="/" component={AppForm} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}
