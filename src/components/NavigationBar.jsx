import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      <Navbar expand="lg" className="header">
        <Container>
          <Navbar.Brand className="nav-logo" href="/">MovieDb</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 justify-content-end flex-grow-1 pe-3">
              <NavLink to="/" className="nav-link">
                Popular
              </NavLink>
              <NavLink to="/top-rated" className="nav-link">
                Top Rated
              </NavLink>
              <NavLink to="/upcoming" className="nav-link">
                Upcoming
              </NavLink>
            </Nav>
            <Form className="d-flex " onSubmit={handleSearch}>
              <Form.Control
                type="text"
                placeholder="Movie Name"
                value={searchQuery}
                className="me-2"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-light" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
