import React, { useState, useDebugValue } from "react";
import "./FilterMovie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

export default function FilterMovie(props) {
  const [show, setShow] = React.useState(false);
  const [filter, setfilter] = useState("Title");
  const [value, setvalue] = useState("");
  console.log(filter);
  console.log(value);
  const onClose = () => {
    setShow(false);
    setvalue("");
  };
  const onClick = () => {
    setShow(true);
    setvalue("");
  };
  function filterMovie() {
    props.filter(filter, value);
    setShow(false);
    setfilter("Title");
    setvalue("");
  }

  return (
    <>
      <button className="filterbut" variant="primary" onClick={onClick}>
        Filter
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
              <Form.Label>Filter By :</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  setfilter(e.target.value);
                }}
              >
                <option>Title</option>
                <option>Rating</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type={filter == "Title" ? "text" : "number"}
                placeholder={
                  filter == "Title" ? "enter a titlle" : "enter a rating"
                }
                onChange={(e) => {
                  setvalue(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={filterMovie}>
            Filter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
