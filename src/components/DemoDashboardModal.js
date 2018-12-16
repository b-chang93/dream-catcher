import React from 'react';
import { Modal, Button } from 'react-bootstrap';
export default function DemoDashboardModal(props) {
  return (
    <Modal show={props.showModal} onHide={props.closeAlert}>
      <Modal.Header closeButton>
        <Modal.Title> <b>Demo Dashboard</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><b>Unfortunately, this is just a demo for you to see what a Dream Catcher project looks like.</b></p>
        <p><b>To create your own dream:</b></p>
        <ul>
          <li>Hit the logout button on the top right</li>
          <li>Sign up from the homepage</li>
          <li>Begin journaling and sharing your dreams!</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle="success" onClick={props.closeAlert}>Got it</Button>
      </Modal.Footer>
    </Modal>
  );
}
