import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const EditModal = ({
  showEdit,
  editChangeHandle,
  editProdX,
  editCloseHandle,
  editProductHandle,
}) => {
  return (
    <Modal show={showEdit}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product Form</Modal.Title>
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
            onChange={editChangeHandle}
            value={editProdX.thumbnail}
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
            onChange={editChangeHandle}
            value={editProdX.title}
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
            onChange={editChangeHandle}
            value={editProdX.description}
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={editCloseHandle}>
          Close
        </Button>
        <Button variant="dark" onClick={editProductHandle}>
          Edit Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
