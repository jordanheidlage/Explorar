import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, NavDropdown } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import "./HomeNavbarStyles.css"
import Auth from '../utils/auth'





function HomeNavbar() {

    const [showModal, setShowModal] = useState(false);
    return (

        <>
            <Navbar id="navbar" expand='lg'>
                <Container fluid>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navCollapse'>
                        <Nav className='ml-auto'>
                            {/* <Nav.Link id="navtabs" as={Link} to='/Signup'>
                                Sign up
                            </Nav.Link>
                            <Nav.Link id="navtabs" as={Link} to='/Profile'>
                                Profile
                            </Nav.Link>  */}
                            <Nav.Link id="navtabs" as={Link} to='/Greece'>
                                Greece
                            </Nav.Link>
                            <Nav.Link id="navtabs" as={Link} to='/Indonesia'>
                                Indonesia
                            </Nav.Link>
                            <Nav.Link id="navtabs" as={Link} to='/Italy'>
                                Italy
                            </Nav.Link>
                            <Navbar.Brand id="navbrand" as={Link} to='/'>
                                <a href="index.html">
                                    <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" className="custom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" className="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" className="ccompli2" fill="#FFBC7D"></path>
                                    </svg>
                                </a>
                                Explorar
                            </Navbar.Brand>
                            <Nav.Link id="navtabs" as={Link} to='/Japan'>
                                Japan
                            </Nav.Link>
                            <Nav.Link id="navtabs" as={Link} to='/Seychelles'>
                                Seychelles
                            </Nav.Link>
                            <Nav.Link id="navtabs" as={Link} to='/Turkey'>
                                Turkey
                            </Nav.Link>


                            <NavDropdown title="Account" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1" as={Link} to='/In'>Login</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2 " as={Link} to='/Profile'>Profile</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3" as={Link} to='/signup'>Sign Up</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4"><Nav.Link as={Link} to='/' onClick={Auth.logout}>Logout</Nav.Link></NavDropdown.Item>
                                {/* <NavDropdown.Item eventKey="4.4"></NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default HomeNavbar;