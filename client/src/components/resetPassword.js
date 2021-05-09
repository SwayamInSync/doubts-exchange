import React, { useRef } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reset } from "../redux/auth/resetpassword/resetPasswordAction";
import { Container } from "react-bootstrap";

function Login({ error, loading, message, resetPass }) {
  const emailRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetPass(emailRef.current.value);
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
              <h2 className="text-center mb-4">Password Reset</h2>
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
                <Button type="submit" className="w-100 mt-2" disabled={loading}>
                  Reset password
                </Button>
              </Form>
              <div className="text-center w-100 mt-3">
                <Link to="/login">Log In</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="text-center w-100 mt-2">
            Not registered yet? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.resetPassword.error,
    message: state.resetPassword.message,
    loading: state.resetPassword.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    resetPass: (email) => {
      dispatch(reset(email));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
