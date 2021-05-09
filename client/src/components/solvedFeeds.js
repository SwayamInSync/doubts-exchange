import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import { fetchSolvedFeeds } from "../redux/general/solvedFeeds/solvedFeedsAction";
import ReactLoading from "react-loading";

export const SolvedFeeds = ({ allFeeds = [], fetchData, loading }) => {
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
        allFeeds.map((item, index) => {
          return (
            <div key={item._id}>
              <Card className="text-center mt-5">
                <Card.Header>Query</Card.Header>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.body}</Card.Text>
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
    loading: state.solvedFeeds.loading,
    allFeeds: state.solvedFeeds.feeds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch({ type: "LOADING" });
      dispatch(fetchSolvedFeeds());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SolvedFeeds);
