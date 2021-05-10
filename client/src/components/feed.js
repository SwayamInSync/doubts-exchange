import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFeeds } from "../redux/general/allFeeds/feedActions";
import { Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import ReactLoading from "react-loading";
import ReactMarkdown from "react-markdown";

export const Feed = ({ allFeeds = [], fetchData, loading }) => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
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
        allFeeds.map((item) => {
          return (
            <div key={item._id}>
              <Card className="text-center mt-5">
                <Card.Header>Query</Card.Header>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <ReactMarkdown>{item.body}</ReactMarkdown>
                  </Card.Text>
                  <Link to={`/single-query/${item._id}`}>
                    <Button variant="primary">Show</Button>
                  </Link>
                </Card.Body>
                <Card.Footer className="text-muted">{item.date}</Card.Footer>
              </Card>
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.feeds.loading,
    allFeeds: state.feeds.feeds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch({ type: "LOADING" });
      dispatch(fetchFeeds());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
