import React from "react";
import { Button } from "react-bootstrap";
import ModalComment2 from "./modalComment2";

function ModalComment1({ id }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Reply
      </Button>

      <ModalComment2
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
      />
    </>
  );
}

export default ModalComment1;
