import React, { useContext, useEffect } from 'react';
import { Row, } from 'react-bootstrap';
import MenuCategories from './components/MenuCategories';
import MainInfos from './components/MainInfos';
import Layout from "./Layout/Layout"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SpecificItem from './pages/SpecificItem';
import Search from './components/Search';
import ContextWrapper from './ContextApi';


function App() {

  const gettingData = useContext(ContextWrapper)
  const data = gettingData.chooseCategoryState
  // (data);

  return (
    <Layout>
      {/*   */}
      <div id='toDisplayNoneForHref'>asdf</div>
      <a href='#toDisplayNoneForHref'>
        {/* <a href='#mainInfo'> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" id='moveDownIconOnBanner' className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
        </svg>
      </a>
      <Row className="my-4">
        <Routes>
          <Route path='/' element={<><Search /><MenuCategories /><MainInfos /></>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/specificItem/:id' element={<SpecificItem />} />
        </Routes>
      </Row >
    </Layout >

  );
}

export default App;