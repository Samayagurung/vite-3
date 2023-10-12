import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SigninForm = ({ handleChange, loginHandle }) => {
  return (
    <Card className="signupCard">
      <Card.Header>
        <h3 className="text-dark">Log in Form</h3>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            className="text-light"
            onClick={loginHandle}
          >
            Log in
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SigninForm;
