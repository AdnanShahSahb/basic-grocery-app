import React from 'react'


import Logo from './Logo';
import Footer from './Footer';
import Banner from "../components/Banner"
import { Container } from 'react-bootstrap';

const Layout = (props) => {
    return (
        <>
            <Logo />
            <Banner />
            <Container>
                {props.children}
                <Footer />
            </Container>
        </>
    )
}

export default Layout