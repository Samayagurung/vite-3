import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductList = ({ prodX, deleteHandle, viewHandle }) => {
  return (
    <>
      <Card className="productCard" style={{ height: "400px" }}>
        <Card.Img variant="top" src={prodX.thumbnail} className="h-50" />
        <Card.Body>
          <Card.Title>
            {prodX.title.length > 14
              ? prodX.title.slice(0, 13) + "..."
              : prodX.title}
          </Card.Title>
          <Card.Text>
            {prodX.description.length > 40
              ? prodX.description.slice(0, 39) + "..."
              : prodX.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="secondary" className="me-2" onClick={(e)=>viewHandle(e,prodX.id)}>
            View
          </Button>
          <Button variant="dark" className="me-2">
            Edit
          </Button>
          <Button
            variant="danger"
            className="me-2"
            onClick={(e) => deleteHandle(e, prodX.id)}
          >
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProductList;
