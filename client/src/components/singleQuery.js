import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getFeed } from "../redux/general/singleFeed/singleFeedActions";
import { Alert, Jumbotron, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import DisplayComments from "./displayComments";
import ModalComment1 from "./modalComment1";
import ReactLoading from "react-loading";

function SingleQuery({ feed = {}, getQuery, currentUser, loading }) {
  const { id } = useParams();
  useEffect(() => {
    getQuery(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <ReactLoading
            type="spinningBubbles"
            color="grey"
            height={50}
            width={50}
          />
        </Container>
      ) : (
        <Jumbotron fluid>
          <Container style={{ paddingTop: "10px" }}>
            <h1>{feed.title}</h1>
            {feed.solved && (
              <Alert variant="success">This query is solved</Alert>
            )}
            <h5>
              <ReactMarkdown>{feed.body}</ReactMarkdown>
            </h5>
            <p>posted on: {feed.date}</p>
            <p>{currentUser && !feed.solved && <ModalComment1 id={id} />}</p>
            <hr />
            <DisplayComments id={id} {...currentUser} {...feed} />
          </Container>
        </Jumbotron>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    feed: state.singleFeed.query,
    currentUser: state.currentUser.user,
    loading: state.singleFeed.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getQuery: (id) => {
      dispatch({ type: "LOADING" });
      dispatch(getFeed(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleQuery);
