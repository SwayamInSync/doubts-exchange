import React, { useRef } from "react";
import { connect } from "react-redux";
import { Form, Card, Button, Alert, Container } from "react-bootstrap";
import { sendFeed } from "../redux/general/sendFeed/sendFeedActions";
import { useHistory } from "react-router-dom";

const CreateQuery = ({ loading, sendData, message, currentUser }) => {
  const titleRef = useRef();
  const queryRef = useRef();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryData = {
      title: titleRef.current.value,
      query: queryRef.current.value,
      email: currentUser.email,
    };
    sendData(queryData);
    history.push("/feeds");
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "800px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Have a Query ?</h2>
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    ref={titleRef}
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="query">
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    type="text"
                    required
                    ref={queryRef}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" className="w-100 mt-3" disabled={loading}>
                  Submit Query
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.sendFeed.loading,
    message: state.sendFeed.message,
    currentUser: state.currentUser.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendData: (query) => {
      dispatch(sendFeed(query));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuery);
