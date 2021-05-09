import React, { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/auth/logout/logoutActions";
import { Container, ListGroup } from "react-bootstrap";
import { getMyFeeds } from "../redux/general/myFeeds/myFeedsActions";
import axios from "axios";

function Dashboard({
  error,
  startLogOut,
  currentUser,
  data,
  getFeeds,
  username,
  loading,
}) {
  const [reload, setReload] = useState(false);
  const handleSolved = async (id) => {
    await axios.post("/solved-query", { id });
    setReload(true);
  };
  useEffect(() => {
    getFeeds(currentUser.email);
  }, [reload]);
  return (
    <>
      <Container
        className="justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "800px", margin: "auto" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Dashboard</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <p>
                <strong>Email: </strong> {currentUser.email}
              </p>
              <strong>Username: </strong> {username}
              <div className="text-center w-100 mt-2">
                <Button
                  variant="danger"
                  onClick={() => {
                    startLogOut();
                  }}
                >
                  Log Out
                </Button>
              </div>
            </Card.Body>
          </Card>

          <h3 className="text-center">My Posts:</h3>
          {data.map((post, idx) => (
            <ListGroup horizontal={post} className="my-2 text-center" key={idx}>
              <ListGroup.Item>
                <Link to={`/single-query/${post._id}`}>{post.title}</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                {post.solved ? (
                  <Button variant="success" disabled={true}>
                    This is solved ✅
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    onClick={() => {
                      handleSolved(post._id);
                    }}
                  >
                    Solved ?
                  </Button>
                )}
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    error: state.logout.error,
    currentUser: state.currentUser.user,
    data: state.myFeed.data,
    username: state.myFeed.username,
    loading: state.myFeed.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogOut: () => {
      return dispatch(logout());
    },
    getFeeds: (email) => {
      dispatch(getMyFeeds(email));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
