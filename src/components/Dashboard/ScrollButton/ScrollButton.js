import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ScrollButton.css'

export default class ScrollButton extends React.Component {

  scrollToTop() {
    let top = document.getElementsByClassName('Header')[0];
    top.scrollIntoView({behavior: "smooth"});
  }

  render () {
    return <button title="Back to top" className="scroll"
       onClick={ () => { this.scrollToTop(); }}>
        <span className="arrow-up"><FontAwesomeIcon icon="angle-double-up" /></span>
      </button>;
   }
}
