import React from 'react';
import { Modal, Button } from 'react-bootstrap';
export default function DashboardModal(props) {
  return (
    <Modal show={props.showModal} onHide={props.closeAlert}>
      <Modal.Header closeButton>
        <Modal.Title> <b>Welcome to your dashboard</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><b>Use the Dream button to start journaling your dreams!</b></p>
        <p><b>Additional Features:</b></p>
        <ul>
          <li>Filter the dream stream to see only yours</li>
          <li>Use the menu to the right of your name to:</li>
          <li>Delete your dream</li>
          <li>Private your dream so no one else can see it</li>
        </ul>
        <p><b>See some cool dreams? Leave a comment and let dreamer know!</b></p>
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle="success" onClick={props.closeAlert}>Got it</Button>
      </Modal.Footer>
    </Modal>
  );
}
