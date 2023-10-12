import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const AddModal = ({ addShow, handleClose, handleChange, addHandler }) => {
  return (
    <Modal show={addShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel
          controlId="floatingImageUrl"
          label="Image URL"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="thumbnail"
            placeholder=""
            onChange={handleChange}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingProductTitle"
          label="Product Title"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="title"
            placeholder=""
            onChange={handleChange}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingProductDescription"
          label="Product Description"
        >
          <Form.Control
            type="text"
            name="description"
            placeholder=""
            onChange={handleChange}
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="dark" onClick={addHandler}>
          Add Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
