import React, { useContext, useState } from 'react'
import { Row, Col, Button, Card, Anchor, } from 'react-bootstrap';
import ContextWrapper from "../ContextApi"
import { Link } from 'react-router-dom';
import Search from './Search';
// import db from "../db.json"
// import images from "../assets/images/assets"
import { generateAccToUser } from "../funcs/diffOf3"

const MainInfos = () => {



    const usingContext = useContext(ContextWrapper)

    const images = usingContext.getImageArray()

    const data = usingContext.getDataFromJson()

    const dataHeader = usingContext.chooseCategoryState
    const dataHeaderPetFood = usingContext.chooseCategoryPetState

    const VisibilityOfPetFood = usingContext.petOnOtherOffVisible;

    const toShowWhichOne = VisibilityOfPetFood ? data['Pet-Food'][0][dataHeaderPetFood] : data[dataHeader];

    const theArrOfDiffOf3 = generateAccToUser(toShowWhichOne.length)
    // console.log(theArrOfDiffOf3);
    return (
        < >
            <Col md={9} >
                {/* <Search /> */}
                <Row id='mainInfo' style={{ borderTopLeftRadius: '200px', borderTopRightRadius: '200px', border: 'solid darkgreen 20px', backgroundColor: 'darkgreen', overflow: 'hidden' }}>

                    {
                        toShowWhichOne.map((d, k) => {
                            // console.log(d);
                            if (d.product_name.toLowerCase().startsWith(usingContext.searchState.toLowerCase()) || d.unit_price.toString().startsWith(usingContext.searchState)) {
                                // if (d.product_name.toLowerCase().includes(usingContext.searchState) || d.unit_price.toString().includes(usingContext.searchState)) {
                                let addOrNot = 'notAdded';
                                usingContext.cart.map((dd, kk) => {
                                    if (dd.name == d.product_name)
                                        addOrNot = 'added';

                                })

                                return (
                                    <Col md={4} key={k} style={{ padding: theArrOfDiffOf3.includes(k) ? 'auto' : '0px'}} id='mainInfoCol' >
                                        {/* <Col md={4} key={k} style={{ paddingRight: k % 3 == 0 ? 'auto' : '0px', paddingLeft: (k) == 0 || k % 3 == 0 ? '0px' : 'auto' }} > */}
                                        <Card className="mb-3">
                                            <Card.Img height={150} variant="top" src={images.images[0][dataHeader][k]} alt="Product" />
                                            <Card.Body>
                                                <Card.Title>{d.product_name}</Card.Title>
                                                <Card.Text>${d.unit_price}</Card.Text>
                                                <Link to={`/specificItem/${k}`}>< >See Detail</></Link>
                                                <label style={{ color: '#fff' }}>llllllllllll</label>
                                                <Button variant="primary" onClick={() => {
                                                    usingContext.addToCartFunc({ name: d.product_name, price: d.unit_price, id: d.product_id, })
                                                }}>

                                                    {/* {usingContext.cart[k] && usingContext.cart[k].name === d.product_name ? 'Added' : 'Add to Cart'} */}

                                                    {addOrNot == 'notAdded' ? 'Add To Cart' : 'Added'}

                                                </Button>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            }

                        })}

                </Row >
            </Col >
        </>
    )
}

export default MainInfos