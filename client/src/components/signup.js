import React, { useRef } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../redux/auth/signup/signupActions";
import { passwordNotMatch } from "../redux/auth/signup/signupActions";
import { Container } from "react-bootstrap";

function Signup({
  error,
  message,
  loading,
  password_not_match,
  startSignUp,
  currentUser,
}) {
  const emailRef = useRef(null);
  const usernameRef = useRef();
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return password_not_match();
    }
    startSignUp(
      emailRef.current.value,
      passwordRef.current.value,
      usernameRef.current.value
    );
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="userName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    ref={usernameRef}
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    ref={emailRef}
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    ref={passwordRef}
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    ref={passwordConfirmRef}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" className="w-100 mt-3" disabled={loading}>
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="text-center w-100 mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.signup.error,
    message: state.signup.message,
    loading: state.signup.loading,
    currentUser: state.currentUser.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    password_not_match: () => {
      dispatch(passwordNotMatch());
    },
    startSignUp: (email, password, name) => {
      dispatch(signup(email, password, name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
