import React, { useContext, useEffect } from 'react'
import { Row, Col, Navbar, Nav, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from "../assets/images/logoGrocery.avif"
import ContextWrapper from '../ContextApi';
// import img from "../assets/logoGrocery.jpg"

const Header = () => {
    const navigateTo = useNavigate();
    const usingContext = useContext(ContextWrapper)

    useEffect(() => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });

    }, [])
    return (
        // <Row className="bg-light py-3">
        //     <Col>
        //         <Navbar bg="light" expand="lg">
        //             <Navbar.Brand href="#home">
        //                 <img src={img} height={50} style={{ borderRadius: '100px' }} alt="Logo" />
        //             </Navbar.Brand>
        //             <Navbar.Toggle aria-controls="navbar-nav" />
        //             <Navbar.Collapse id="navbar-nav">
        //                 <Nav className="mr-auto">
        //                     <Nav.Link onClick={() => { navigateTo('/') }}>Home</Nav.Link>
        //                     <Nav.Link onClick={() => { navigateTo('/cart') }}>Cart</Nav.Link>

        //                 </Nav>

        //             </Navbar.Collapse>
        //         </Navbar>
        //     </Col>
        // </Row>
        <header id='header'>
            <nav className="navbar navbar-expand-lg navbar-light position-fixed w-100" style={{ zIndex: '100', backgroundColor: '#BCA136', }}>
                <div className="container " >
                    <a id='logoId' className="navbar-brand" onClick={() => { navigateTo('/') }}>
                        <img src={img} className='rounded-5' alt="Logo" width="50" height="50" style={{ marginRight: '20px', color: 'navy' }} />
                        My Grocery
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav" >
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item " onClick={() => { navigateTo('/') }}>
                                <a className="nav-link active" aria-current="page" id='navbarA'>Home</a>
                            </li>
                            <li className="nav-item " onClick={() => { navigateTo('/cart') }}>
                                <a className="nav-link" id='navbarA'>Cart({usingContext.cart.length})</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >

    )
}

export default Header