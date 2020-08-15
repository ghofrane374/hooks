import React, { useState } from "react";
import "./AddMovie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

export default function AddMovie(props) {
  const [show, setShow] = React.useState(false);
  const [title, settitle] = React.useState("");
  const [descrip, setdescrip] = React.useState("");
  const [rating, setrating] = React.useState("");
  const [youid, setyoutid] = React.useState("");

  const onClose = () => setShow(false);
  const onClick = () => setShow(true);

  function ajouter() {
    props.addmovie({
      title: title,
      description: descrip,
      rating: rating,
      url: youid,
    });
    setShow(false);
  }

  return (
    <>
      <button className="addbut" variant="primary" onClick={onClick}>
        Add
      </button>
      <Modal
        animation={false}
        show={show}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Movie Title"
                onChange={(elt) => {
                  settitle(elt.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Movie Description"
                onChange={(elt) => {
                  setdescrip(elt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="rating"
                onChange={(elt) => {
                  setrating(elt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Youtube ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Youtube Id"
                onChange={(elt) => {
                  setyoutid(elt.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ajouter}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
