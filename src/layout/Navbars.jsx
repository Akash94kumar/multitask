import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "	#455d7a" }} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <BsArrowRightCircleFill className="text-warning" />
            Multi
            <span className="text-warning">Task</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <NavDropdown title="Crud" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/contactmanager/list">
                  Contact Manager
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Contact">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
