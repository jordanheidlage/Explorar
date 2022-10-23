import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./HomeNavbarStyles.css"





function HomeNavbar() {

    const [showModal, setShowModal] = useState(false);
    return (

        <>
            <Navbar id="navbar" expand='lg'>
                <Container fluid>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navCollapse'>
                        <Nav className='ml-auto'>
                            <Nav.Link id="navtabs" as={Link} to='/Signup'>
                                Sign up
                            </Nav.Link>
                            <Nav.Link id="navtabs" as={Link} to='/Profile'>
                                Profile
                            </Nav.Link>
                            <Nav.Link id="navtabs" as={Link} to='/Greece'>
                                Greece
                            </Nav.Link>
                            <Nav.Link id="navtabs" as={Link} to='/Indonesia'>
                                Indonesia
                            </Nav.Link>
                            <Nav.Link id="navtabs" as={Link} to='/Italy'>
                                Italy
                            </Nav.Link>
                            <Navbar.Brand id="navbrand" as={Link} to='/Home'>
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
                            <Nav.Link as={Link} to='/In'>
                                <Button id= "loginButton"  className="btn-outline-warning" >Login</Button>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/Out'>

                            </Nav.Link>


                            {/* if user is logged in show saved books and logout */}
                            {/* {Auth.loggedIn() ? (
                                    <>
                                        <Nav.Link as={Link} to='/saved'>
                                            See Your Books
                                        </Nav.Link>
                                        <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                                    </>
                                ) : (
                                    <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                                )} */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* set modal data up */}
            {/* <Modal
                    size='lg'
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    aria-labelledby='signup-modal'> */}
            {/* tab container to do either signup or login component */}
            {/* <Tab.Container defaultActiveKey='login'>
                        <Modal.Header closeButton>
                            <Modal.Title id='signup-modal'>
                                <Nav variant='pills'>
                                    <Nav.Item>
                                        <Nav.Link eventKey='login'>Login</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Tab.Content>
                                <Tab.Pane eventKey='login'>
                                    <LoginForm handleModalClose={() => setShowModal(false)} />
                                </Tab.Pane>
                                <Tab.Pane eventKey='signup'>
                                    <SignUpForm handleModalClose={() => setShowModal(false)} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Modal.Body>
                    </Tab.Container>
                </Modal> */}
        </>

    )
}

export default HomeNavbar;