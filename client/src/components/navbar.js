import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

function NavbarComponent({ currentUser }) {
  return (
    <Navbar bg="light" expand="lg" sticky="top" variant="light">
      <Navbar.Brand href="/" style={{ marginLeft: "20px" }}>
        Doubt Exchange
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center">
          <Nav.Link href="/">
            <HomeIcon fontSize="large" />
          </Nav.Link>
          <Nav.Link href="/feeds">
            <DescriptionIcon fontSize="large" />
          </Nav.Link>
          <Nav.Link href="/solved-feeds">
            <CheckBoxIcon fontSize="large" />
          </Nav.Link>
          {currentUser ? (
            <>
              <Nav.Link href="/create-query">
                <NoteAddIcon fontSize="large" />
              </Nav.Link>
              <Nav.Link href="/dashboard">
                <AssignmentIndIcon fontSize="large" />
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/login">
                <VpnKeyIcon fontSize="large" />
              </Nav.Link>
              <Nav.Link href="/signup">
                <PersonAddIcon fontSize="large" />
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
  };
};

export default connect(mapStateToProps)(NavbarComponent);
