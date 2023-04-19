import React from 'react'
import banner from "../assets/images/banner.jpg"
import { Card, Col, Row } from 'react-bootstrap'

const Banner = () => {
    return (

        <Row id="row">
            <Col>
                <Card>
                    <Card.Img height="300px" src={banner} alt="Banner" />
                </Card>
            </Col>
        </Row>
    )
}

export default Banner