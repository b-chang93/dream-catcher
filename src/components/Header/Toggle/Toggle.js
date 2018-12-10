import React from 'react';
import './Toggle.css'

export default class Toggle extends React.Component {
  render() {
    let dreamSetting;
    if(this.props.myDreams) {
      dreamSetting = 'All Dreams'
    } else {
      dreamSetting = 'My Dreams'
    }

    return(
      <div className="dreams_setting_container">
        <p className="toggle_dreams">{dreamSetting}</p>
        <label className="switch">
          <input type="checkbox" onClick={this.props.toggler}></input>
          <span className="slider"></span>
        </label>
      </div>
    );
  }
};
