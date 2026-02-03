import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = ({ setPage }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => setPage("home")}>
          Experiment-3
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => setPage("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => setPage("about")}>About</Nav.Link>
            <Nav.Link onClick={() => setPage("section")}>Section</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
