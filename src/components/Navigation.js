import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

const Navigation = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function inputChange(e) {
    setText(e.target.value);
  }
  function search() {
    navigate(`/search?keyword=${text}`);
  }
  return (
    <Navbar style={{ backgroundColor: "black" }} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            width={100}
            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link
              to="/movies"
              className="nav-item"
              style={{ marginLeft: "25px" }}
            >
              Movies
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={inputChange}
            />
            <Button variant="outline-danger" onClick={search}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
