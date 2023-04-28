import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ContextWrapper from '../ContextApi';

const SpecificItem = () => {
  const usingParam = useParams();

  const usingContext = useContext(ContextWrapper)

  const data = usingContext.getDataFromJson()
  const dataHeader = usingContext.chooseCategoryState
  const dataHeaderPetFood = usingContext.chooseCategoryPetState

  const images = usingContext.getImageArray();

  const whichCategData = !usingContext.petOnOtherOffVisible ? data[dataHeader][usingParam.id] : data['Pet-Food'][0][dataHeaderPetFood][usingParam.id]

  // console.log(whichCategData);

  const whichCategImg = !usingContext.petOnOtherOffVisible ? images.images[0][dataHeader][usingParam.id] : images.images[0]['Pet-Food'][dataHeaderPetFood][usingParam.id]

  // images.images[0]['Pet-Food'][dataHeaderPetFood][k]
  // images.images[0][dataHeader][k]

  useEffect(() => {
    // console.log(data[dataHeader],useParams);
    // console.log(usingParam.id);
    // console.log(data[dataHeader][usingParam.id]);
    document.getElementById('moveDownIconOnBanner').scrollIntoView();

  }, [])


  let addOrNot = 'notAdded';
  usingContext.cart.map((dd, kk) => {
    if (dd.name == whichCategData.product_name)
      addOrNot = 'added';

  })


  return (

    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-6" >
    //       <img style={{ height: '50vh' }} src={whichCategImg} alt="Product Image" className="img-fluid" />
    //     </div>
    //     <div className="col-md-6" style={{ marginTop: '10vh' }}>
    //       <h1>{whichCategData.product_name} <label style={{ fontWeight: 'normal', fontSize: '1rem' }}>({dataHeader})</label></h1>

    //       {/* <p>Product Description</p> */}
    //       <h3>${whichCategData.unit_price}</h3>
    //       <form>
    //         <div className="form-group">
    //           <label htmlFor="quantity">Quantity:{whichCategData.unit_quantity}
    //           </label>
    //           {/* <input type="text" id="quantity" className="form-control" value={whichCategData.unit_quantity} /> */}
    //         </div>
    //         <br />
    //         <button onClick={(e) => { e.preventDefault(); usingContext.addToCartFunc({ name: whichCategData.product_name, number: 2, price: whichCategData.unit_price, id: whichCategData.product_id }) }} className="btn btn-primary" >

    //           {/* {usingContext.cart[usingParam.id] && usingContext.cart[usingParam.id].name === whichCategData.product_name ? 'Added' : 'Add to Cart'} */}
    //           {addOrNot == 'notAdded' ? 'Add To Cart' : 'Added'}

    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="container my-5" id='specItem'>
      <div className="row">
        {/* <!-- Product Image --> */}
        <div className="col-md-6">
          <img src={whichCategImg} alt="Product Image" style={{ height: '70vh' }} className="img-fluid" />
        </div>
        {/* <!-- Product Information --> */}
        <div className="col-md-6 mb-5">
          <h2 className='fs-1 mb-5'>{whichCategData.product_name}</h2>
          <p className="text-muted fs-5 mb-5">{dataHeader}</p>
          <p className="lead fs-1 mb-5">${whichCategData.unit_price}</p>
          <form>
            <div className="mb-3 fs-4 mb-5">
              <label htmlFor="quantity" className=''>Unit Quantity</label>
              <input disabled className="form-control " id="quantity" defaultValue={whichCategData.unit_quantity} min="1" />
            </div>

            {/* <button className="btn btn-primary mt-4">Add to Cart</button> */}
            <button onClick={(e) => { e.preventDefault(); usingContext.addToCartFunc({ name: whichCategData.product_name, number: 2, price: whichCategData.unit_price, id: whichCategData.product_id }) }} className="btn btn-primary" >

              {/* {usingContext.cart[usingParam.id] && usingContext.cart[usingParam.id].name === whichCategData.product_name ? 'Added' : 'Add to Cart'} */}
              {addOrNot == 'notAdded' ? 'Add To Cart' : 'Added'}

            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SpecificItem