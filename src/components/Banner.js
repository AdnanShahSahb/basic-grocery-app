import React from 'react'
import banner from "../assets/images/banner.jpg"
import { Card, Col, Row } from 'react-bootstrap'

const Banner = () => {
    return (
        <div>
            <img height='600vh' width='100%' src={banner} />
            {/* <Row id="row" noGutters style={{ margin: 0, padding: 0 }}>
                <Col style={{ margin: 0, padding: 0 }}>
                    <Card style={{ margin: 0, padding: 0 }}>
                        <Card.Img height="300px" src={banner} alt="Banner" style={{ borderRadius: '0 !important' }} />
                    </Card>
                </Col>
            </Row> */}
        </div>
    )
}

export default Banner