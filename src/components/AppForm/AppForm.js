import React from 'react';
import './AppForm.css'
import Panel from '../Panel/Panel.js'

export default class AppForm extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
            <div className="AppForm">
                <Panel />
            </div>
        );
    }
}
