import React from "react";
import { Alert, Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <Alert variant="danger">
                <Alert.Heading>Nothing Found 404!</Alert.Heading>
                <Link to="/feeds">
                  <Button variant="success">Click here to go back</Button>
                </Link>
              </Alert>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Error;
