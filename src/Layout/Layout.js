import React from 'react'


import Logo from './Logo';
import Footer from './Footer';
import Banner from "../components/Banner"
import { Container } from 'react-bootstrap';

const Layout = (props) => {
    return (
        <>
            <Logo />
            <div style={{ height: '75.961px' }}>takePlaceOfNavbar</div>
            <Banner />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </>
    )
}

export default Layout