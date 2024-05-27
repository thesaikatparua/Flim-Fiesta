import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Search from "./movieSearch";
import "../../media query/Navbarres.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Header = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("Sign In");

  const login = () => {
    navigate("/login");
  };

  useEffect(() => {
    setName(props.name ? `Hi, ${props.name}` : "Sign In");
  }, [props.name]);

  const logOut = () => {
    setName(`Hi, ${props.name}`);
    navigate("/profile");
  };

  



  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary"
          id="nav"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <Link to="/">
                <img
                  src={Logo}
                  alt="logo"
                  style={{ width: "8rem", height: "3rem" }}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to="/">
                    <img
                      src={Logo}
                      alt="logo"
                      style={{ width: "8rem", height: "3rem" }}
                    />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start " id="menu">
                  <Nav.Link href="#action1">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Home
                    </Link>
                  </Nav.Link>
                  <NavDropdown
                    className="location_dropdown"
                    title="Location"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Kolkata</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Delhi</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Bengaluru
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Mumbai</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Hyderabad
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form id="search_box">
                  <Search />
                </Form>

                <Button
                  variant="outline-danger"
                  id="login_button"
                  onClick={name === "Sign In" ? login : logOut}
                >
                  {name}
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
