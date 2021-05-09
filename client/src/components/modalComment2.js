import { Modal, Button } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

function ModalComment2(props) {
  const { currentUser, id } = props;

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
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {message && <Alert variant="success">{message}</Alert>}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="comment">
              <Form.Label>Add Comment</Form.Label>
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
        </Modal.Body>
      </Modal>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
  };
};
export default connect(mapStateToProps)(ModalComment2);
