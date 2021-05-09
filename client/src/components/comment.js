import React, { useRef, useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

function Comment({ currentUser, id }) {
  const commentRef = useRef();
  const [message, setMessage] = useState("");

  const sendComment = async (data) => {
    await axios.post("/get-comment", data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      id: id,
      author: currentUser.email,
      comment: commentRef.current.value,
    };
    sendComment(commentData);
    setMessage("your reply is sent, refresh to view it");
  };
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "800px" }}>
          {message && <Alert variant="success">{message}</Alert>}
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="comment">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    type="text"
                    ref={commentRef}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" className="w-100 mt-2">
                  Reply
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
  };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps)(Comment);
