import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFeeds } from "../redux/general/allFeeds/feedActions";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export const Feed = ({ allFeeds = [], fetchData, loading }) => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <h2>Loading</h2>
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
