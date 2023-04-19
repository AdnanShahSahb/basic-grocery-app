import React, { useContext } from 'react'
import { Col, Nav, NavDropdown } from 'react-bootstrap';
import ContextWrapper from '../ContextApi';
// import db from "../db.json"

const MenuCategories = () => {

    const usingContext = useContext(ContextWrapper)

    const chooseCategoryOtherFood = (e) => {
        usingContext.chooseCategoryOtherFoodFunc(e)
        usingContext.petOnHeaderOffVisibleFunc(false)

    }

    const setHeaderPet = (e) => {
        usingContext.chooseCategoryPetFoodFunc(e)
        usingContext.petOnHeaderOffVisibleFunc(true)
    }

    const data = usingContext.getDataFromJson();

    const hovering = !usingContext.petOnOtherOffVisible ? usingContext.chooseCategoryState : usingContext.chooseCategoryPetState;

    return (
        <Col className='greening' md={3} style={{ backgroundColor: '#BCA136 ', }}>
            <Nav className="flex-column text-center" style={{marginTop:'10vh'}}>
                {Object.keys(data).map((d, k) => {
                    if (k == Object.keys(data).length - 1) { }
                    else {
                        return (
                            <Nav.Item className=''>
                                <Nav.Link id='categs' onClick={(e) => { chooseCategoryOtherFood(e.target.innerHTML) }} style={{ color: 'navy', backgroundColor: d == hovering ? 'green' : '#BCA136', color: d == hovering ? '#fff' : 'navy' }} active>
                                    {Object.keys(data)[k]}
                                </Nav.Link>
                            </Nav.Item>
                        )
                    }
                })}


                <NavDropdown title="Pet Food" id="products-dropdown" >
                    {Object.keys(data['Pet-Food'][0]).map((d) => {
                        return (<NavDropdown.Item id='categs' onClick={(e) => { setHeaderPet(e.target.innerHTML) }} style={{ color: 'navy', backgroundColor: d == hovering ? 'green' : '#BCA136', fontWeight: d == hovering ? 'bolder' : '' }}>{d}</NavDropdown.Item>)
                    })}
                </NavDropdown>
            </Nav>
        </Col >

    )
}

export default MenuCategories