import React from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { Button, ListGroup, Card } from "react-bootstrap";

function DisplayComments({ id, email, comment, solved, author }) {
  const handleSolved = async (c_id, p_id) => {
    await axios.post("/solution-comment", { c_id, p_id });
  };

  return (
    <div>
      {comment
        ? comment.map((item) => {
            return (
              <Card body className="mt-3" key={item.id}>
                <main>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h4>{item.author}</h4>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <article>
                        <ReactMarkdown>{item.comment}</ReactMarkdown>
                      </article>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p>posted on: {item.date}</p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <div>
                        {item.solution && (
                          <Button variant="success" disabled={true}>
                            This is the solution ✅
                          </Button>
                        )}
                        {!item.solution && email === author.email && (
                          <Button
                            variant="success"
                            onClick={() => {
                              handleSolved(item.id, id);
                            }}
                          >
                            Solution ?
                          </Button>
                        )}
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </main>
              </Card>
            );
          })
        : null}
    </div>
  );
}

export default DisplayComments;
