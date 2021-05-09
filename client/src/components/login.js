import React, { useRef } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/auth/login/loginActions";
import { Container } from "react-bootstrap";

function Login({ error, message, loading, startLogIn, redirect, currentUser }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    startLogIn(emailRef.current.value, passwordRef.current.value);
  };

  if (redirect) {
    return <Redirect to="/feeds" />;
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
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
                <Button type="submit" className="w-100 mt-3" disabled={loading}>
                  Log In
                </Button>
              </Form>
            </Card.Body>
            <div className="text-center w-100 mt-3">
              <Link to="/forget-password">Forget password?</Link>
            </div>
          </Card>
          <div className="text-center w-100 mt-2">
            Don't have an account? <Link to="/signup">Create one</Link>
          </div>
        </div>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.login.error,
    message: state.login.message,
    loading: state.login.loading,
    redirect: state.login.redirect,
    currentUser: state.currentUser.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogIn: (email, password) => {
      dispatch(login(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
