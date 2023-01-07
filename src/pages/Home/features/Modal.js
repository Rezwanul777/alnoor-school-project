import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
       Get Started
      </Button>

      <Modal xs={12} md={8} show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Notice Something !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Admission Going On Play and Nursery</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBtn;