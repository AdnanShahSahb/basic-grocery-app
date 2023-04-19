import React, { useContext } from 'react';
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