import React, { useContext, useEffect, useRef } from 'react'
import { Form, Button } from 'react-bootstrap';
import ContextWrapper from '../ContextApi';
import { getDataFromForm } from '../funcs/getDataFromForm';
import { emailSending } from "../funcs/emailSending"

const Checkout = () => {

  const checkoutRefForm = useRef()

  const usingContext = useContext(ContextWrapper)


  let obj = {};





  useEffect(() => {

    document.getElementById('toDisplayNoneForHref').scrollIntoView();

    // Get the form element
    const form = document.getElementById('myForm');

    // Add event listener htmlFor form submission
    form.addEventListener('submit', function (event) {
      // Check if the form is valid
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Add a className to show validation feedback
      form.classList.add('was-validated');

      event.preventDefault();
      event.stopPropagation();

      const theData = getDataFromForm();

      // console.log(theData);
      console.log(usingContext.checkoutList.totalPriceVarForDeliv);
      const msg = {
        product: `${usingContext.cart.map((d, k) => {   // cart bcz it can be mapped
          // console.log(d);
          return (`
          Name: ${usingContext.checkoutList[k].name}, Price: $${usingContext.checkoutList[k].price}, Quantity: ${usingContext.checkoutList[k].totalNumber},Total Price:${usingContext.checkoutList[k].totalPrice}
          `)
        })}
        `,
        TOTAL_PRICE: `${usingContext.checkoutList.totalPriceVarForDeliv}`
        ,
        deliv_name: `${theData.deliv_name}`,
        deliv_email: `${theData.deliv_email}`,
        deliv_address: `${theData.deliv_address}`,
        deliv_suburb: `${theData.deliv_suburb}`,
        deliv_state: `${theData.deliv_state}`,
        deliv_country: `${theData.deliv_country}`,
        deliv_number: `${theData.deliv_number}`,
      }
      // console.log(msg);
      emailSending(msg);

    });

    // Add event listeners htmlFor input fields to remove validation feedback on input
    form.addEventListener('input', function (event) {
      event.target.classList.remove('is-invalid');
      event.target.classList.remove('is-valid');
    });

    // Add event listeners htmlFor input fields to show validation feedback on blur
    form.addEventListener('blur', function (event) {
      if (event.target.checkValidity() === false) {
        event.target.classList.add('is-invalid');
      } else {
        event.target.classList.add('is-valid');
      }
    });

  }, [])

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h2 id='checkoutTextH2'>Checkout</h2>
      {/* <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Name</Form.Label>
          <Form.Control type="text" placeholder="Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Address</Form.Label>
          <Form.Control as="textarea" rows={3} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Suburb</Form.Label>
          <Form.Control type="text" placeholder="Suburb" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Country</Form.Label>
          <Form.Control type="text" placeholder="Country" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Phone Number</Form.Label>
          <Form.Control type="number" placeholder="number" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={() => { console.log(1); }}>
          Place Order
        </Button>
      </Form> */}
      {/* <form id="myForm" ref={checkoutRefForm} className="needs-validation" noValidate>
        <div className='row'>

          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input name='deliv_name' type="text" className="form-control" id="firstName" required />
            <div classNameNameName="invalid-feedback">
              Please provide a valid first name.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Email ID</label>
            <input name='deliv_email' type="text" classNameNameName="form-control" id="email" required />
            <div classNameName="invalid-feedback">
              Please provide a valid Email ID.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">Address</label>
            <input name='deliv_address' type="text" className="form-control" id="address" required />
            <div className="invalid-feedback">
              Please provide a valid Address.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Suburb</label>
            <input name='deliv_suburb' type="text" className="form-control" id="suburb" required />
            <div className="invalid-feedback">
              Please provide a valid Suburb.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">State</label>
            <input name='deliv_state' type="text" className="form-control" id="state" required />
            <div className="invalid-feedback">
              Please provide a valid State.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Country</label>
            <input name='deliv_country' type="text" className="form-control" id="country" required />
            <div className="invalid-feedback">
              Please provide a valid Country.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">Number</label>
            <input name='deliv_number' type="text" className="form-control" id="number" required />
            <div className="invalid-feedback">
              Please provide a valid Number.
            </div>
          </div>


          <button type="submit" className="btn btn-primary">Place Order</button>
        </div>

      </form> */}

      <form id="myForm" ref={checkoutRefForm} className="needs-validation" noValidate>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input name='deliv_name' type="text" className="form-control" id="firstName" required />
              <div className="invalid-feedback">
                Please provide a valid first name.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="country" className="form-label">Country</label>
              <input name='deliv_country' type="text" className="form-control" id="country" required />
              <div className="invalid-feedback">
                Please provide a valid country.
              </div>
            </div>


            <div className="mb-3">
              <label htmlFor="state" className="form-label">State</label>
              <input name='deliv_state' type="text" className="form-control" id="state" required />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="number" className="form-label">Number</label>
              <input name='deliv_number' type="text" className="form-control" id="number" required />
              <div className="invalid-feedback">
                Please provide a valid number.
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email ID</label>
              <input name='deliv_email' type="text" className="form-control" id="email" required />
              <div className="invalid-feedback">
                Please provide a valid Email ID.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="suburb" className="form-label">Suburb</label>
              <input name='deliv_suburb' type="text" className="form-control" id="suburb" required />
              <div className="invalid-feedback">
                Please provide a valid suburb.
              </div>
            </div>


            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea rows={5} name='deliv_address' type="text" className="form-control" id="address" required />
              <div className="invalid-feedback">
                Please provide a valid address.
              </div>
            </div>

          </div>
        </div>

        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>


    </div>

  )
}

export default Checkout