import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ViewModal = ({ viewShow, viewProdX, viewCloseHandle }) => {
  return (
    <Modal show={viewShow}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card.Img
          src={viewProdX.thumbnail}
          className="p-3 "
          style={{ height: "300px" }}
        ></Card.Img>

        <FloatingLabel
          controlId="floatingProductTitle"
          label="Product Title"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="title"
            placeholder=""
            readOnly
            value={viewProdX.title}
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
            readOnly
            value={viewProdX.description}
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={viewCloseHandle}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewModal;
