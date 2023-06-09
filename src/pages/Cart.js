import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContextWrapper from '../ContextApi';

const Cart = () => {
  const usingContext = useContext(ContextWrapper)
  const arr = usingContext.cart

  // console.log(arr.length);

  const [totalPriceVarForDeliveState, setTotalPriceVarForDeliveState] = useState(0.000)

  const incDecrRef = useRef();

  // let arrForValueOfQuantityInRowsArray = []
  const [arrForValueOfQuantityInRows, setArrForValueOfQuantityInRows] = useState([])

  const [inputs, setInputs] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };


  const inputFields = [];
  for (let i = 0; i < 3; i++) {

  }

  let tbody;
  let totalPriceVarForDeliv = 0;

  if (document.querySelector('tbody') && document.querySelector('tbody').childNodes[0]) {
    tbody = document.querySelector('tbody');
    // console.log(tbody.childNodes[0].childNodes[1].innerHTML.slice(1, 2));
    // console.log(tbody.childNodes[0].childNodes[2].childNodes[0].value);
  }
  let arrTotalPrice = [];


  const handleCheckoutListFunc = () => {
    // && document.querySelector('tbody').children && document.querySelector('tbody').childNodes[0].childNodes
    if (document.querySelector('tbody')) {

      for (let z = 0; z < document.querySelector('tbody').children.length - 1; z++) {
        // console.log(document.querySelector('tbody').childNodes[z].childNodes[1].innerHTML.slice(1, 2));
        arrTotalPrice[z] = document.querySelector('tbody').childNodes[z].childNodes[3].innerHTML.slice(1, 6)


        usingContext.cart[z]['totalPrice'] = document.querySelector('tbody').childNodes[z].childNodes[3].innerHTML.slice(1, 6);
        usingContext.cart[z]['totalNumber'] = document.querySelector('tbody').childNodes[z].childNodes[2].childNodes[0].value;

        // totalPriceVarForDeliv = parseFloat(totalPriceVarForDeliv) + parseFloat(document.querySelector('tbody').childNodes[z].childNodes[3].innerHTML.slice(1, 6))
        usingContext.cart = { ...usingContext.cart, "totalPriceVarForDeliv": totalPriceVarForDeliv }
      }

    }

    // console.log(totalPriceVarForDeliv);
    // console.log(usingContext.cart);
    // setTotalPriceVarForDeliveState(totalPriceVarForDeliv)
    usingContext.addToCheckoutFunc(usingContext.cart)
    // console.log(usingContext.cart);
    // console.log(totalPriceVarForDeliv);
  }

  useEffect(() => {

    // console.log('totaliingUseffecting');
    document.getElementById('footer').scrollIntoView();



    for (let z = 0; z < document.querySelector('tbody').children.length - 1; z++) {

      totalPriceVarForDeliv = parseFloat(totalPriceVarForDeliv) + parseFloat(document.querySelector('tbody').childNodes[z].childNodes[3].innerHTML.slice(1, 6));

      setTotalPriceVarForDeliveState(totalPriceVarForDeliv)
      // console.log(totalPriceVarForDeliv, totalPriceVarForDeliveState);
    }

    // console.log(document.querySelector('tbody').children.length);
    if (document.querySelector('tbody').children.length == 1) {
      setTotalPriceVarForDeliveState(0)
    }


    return () => {
      document.getElementById('header').scrollIntoView();
    }
  })

  // useEffect(() => {//---------------------------FOR SETTING DATA TO SESSION STORAGE
  //   for (let z = 0; z < document.querySelector('tbody').children.length - 1; z++) {
  //     setHandleIncDecr(1);
  //     sessionStorage.setItem(`cartQuantityInputField${document.querySelector('tbody').children[z].children[0].innerHTML}`, 1)
  //     // sessionStorage.removeItem(`cartQuantityInputField${z}`)
  //     console.log(document.querySelector('tbody').children[z].children[0].innerHTML);
  //     console.log(z);
  //   }
  // }, [])

  const checkoutBtn = <Link to={arr.length !== 0 && '/checkout'}>
    <Button className={arr.length != 0 ? 'btn-primary' : 'btn-secondary'} onClick={handleCheckoutListFunc}>Checkout</Button>
  </Link>

  const clearAllBtn = <Button onClick={() => { for (let m = 0; m <= arr.length; m++) { sessionStorage.removeItem(`cartQuantityInputField${m}`); }; usingContext.clearAllCartFunc(); setTotalPriceVarForDeliveState(0) }} style={{ marginLeft: '10px' }}>Clear All</Button>

  const totalAmountVar =
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td style={{ fontWeight: 'bolder' }}>TOTAL: {totalPriceVarForDeliveState.toFixed(2)}</td>
      <td></td>
    </tr>

  return (

    <div>
      <h2>Your Cart</h2>
      <Table striped bordered hover className='border' id='tableCart'>
        <thead>
          <tr>
            <th scope='col'>Product Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Total</th>
            <th scope='col' style={{ textAlign: 'center' }}>Delete</th>
          </tr>
        </thead>
        <tbody style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {arr.map((d, k) => {
            // console.log(sessionStorage.getItem(`cartQuantityInputField${d.name}`));
            const quantityTd = <td>
              {/* {d.number} */}
              <input onChange={(e) => {
                const newArr = [...arrForValueOfQuantityInRows];
                newArr[k] = e.target.value; setArrForValueOfQuantityInRows(newArr);
                sessionStorage.setItem(`cartQuantityInputField${document.querySelector('tbody').children[k].children[0].innerHTML}`, e.target.value)
                // console.log(document.querySelector('tbody') && document.querySelector('tbody').children[k].children[0].innerHTML);

              }} value={sessionStorage.getItem(`cartQuantityInputField${d.name}`) !== null ? sessionStorage.getItem(`cartQuantityInputField${d.name}`) : 1} type="number" ref={incDecrRef} defaultValue={sessionStorage.getItem(`cartQuantityInputField${d.name}`)} min="0" max="100" step="1" />
              {/* <input onChange={(e) => { sessionStorage.setItem(`cartQuantityInputField${document.querySelector('tbody').children[k].children[0].innerHTML}`, e.target.value); setHandleIncDecr(e.target.value); }} type="number" id="value" ref={incDecrRef} defaultValue={sessionStorage.getItem(`cartQuantityInputField${document.querySelector('tbody')}`) ? sessionStorage.getItem(`cartQuantityInputField${document.querySelector('tbody').children[k].children[0].innerHTML}`) : 1} min="0" max="100" step="1" /> */}
            </td>

            const totalTd = <td>
              ${parseFloat(sessionStorage.getItem(`cartQuantityInputField${d.name}`) * d.price).toFixed(2) == '0.00' ? d.price : parseFloat(sessionStorage.getItem(`cartQuantityInputField${d.name}`) * d.price).toFixed(2)}  {/*bcz it wont happen easily*/}
            </td>

            const dustbinTd = <td onClick={() => { sessionStorage.removeItem(`cartQuantityInputField${document.querySelector('tbody').children[k].children[0].innerHTML}`); usingContext.removeFromCartFunc(d.id); }} style={{ textAlign: 'center' }} id='dustbinIconCart'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg>
            </td>
            // document.querySelector('tbody') &&
            //   console.log(sessionStorage.getItem(`${document.querySelector('tbody').children[k].children[0].innerHTML}`));
            // map arr return-----------------------------------------------------------------------------------------------
            return (
              <tr className='tbodyCart' key={k}>
                <td>{d.name}</td>
                <td>${d.price}</td>
                {quantityTd}
                {totalTd}
                {dustbinTd}
              </tr>
            )
          })}
          {totalAmountVar}
        </tbody>
        {/* <br /> */}
        {/* <Link ><Button className={arr.length != 0 ? 'btn-primary' : 'btn-secondary'} onClick={handleCheckoutListFunc}>Checkout</Button></Link> */}
      </Table>
        {checkoutBtn}
        {clearAllBtn}
    </div >

  )
}

export default Cart