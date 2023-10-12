import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignupForm = ({handleChange,signupHandle}) => {
  return (
    <>
      <Card className="Card">
        <Card.Header>
          <h3 className="text-info">Sign Up Form</h3>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="fullName" placeholder="Enter Full Name" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter Email" onChange={handleChange} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Enter Password" onChange={handleChange} />
            </Form.Group>

            <Button variant="info" type="submit" className="text-light" onClick={signupHandle}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default SignupForm;
