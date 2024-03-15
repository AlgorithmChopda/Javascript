import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="ms-auto">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Todo Application
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-end">
            <Nav.Link as={Link} to="/add">
              Add
            </Nav.Link>
            <Nav.Link as={Link} to="/view">
              View
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
