import React, { createContext, useState } from 'react'
import data from "./assets/db.json";
import images from "./assets/assets"

const ContextWrapper = createContext()

export const ContextParent = (props) => {

  const [chooseCategoryState, chooseCategoryOtherFoodState] = useState("Frozen-Food");
  const [chooseCategoryPetState, setchooseCategoryPetState] = useState("cat");

  const [searchState, setSearchState] = useState('')

  const [petOnOtherOffVisible, setPetOnOtherOffVisible] = useState(false);

  const [cart, setCart] = useState([])
  // const [cart, setCart] = useState([{ name: 'a', price: '30' }, { name: 'a', price: '30' }])
  const [checkoutList, setCheckoutList] = useState([])

  const [allow, setAllow] = useState(true)



  const getDataFromJson = (p) => {
    return data
  }

  const getImageArray = () => {
    return images
  }

  const chooseCategoryOtherFoodFunc = (p) => {
    chooseCategoryOtherFoodState(p)
  }
  const chooseCategoryPetFoodFunc = (p) => {
    setchooseCategoryPetState(p)
  }

  const petOnHeaderOffVisibleFunc = (p) => {
    setPetOnOtherOffVisible(p)
  }



  const addToCartFunc = (p) => {
    let allowing = true;
    cart.map((dd) => {
      // console.log(dd.name, p.name);
      if (dd.name === p.name) {
        allowing = false
      }

    })
    allowing == true && setCart((already) => { return already.concat(p) })
  };

  const addToCheckoutFunc = (p) => {
    setCheckoutList(p)
    // console.log(p);
  }

  const removeFromCartFunc = (p) => {
    setCart((prevUserFav) => {
      return prevUserFav.filter((already) => { return already.id !== p }); //if false then remove
    });
  };

  const clearAllCartFunc = () => {
    setCart([])
  }

  const handleSearchFunc = (e) => {
    setSearchState(e.target.value)

  }

  // const itemIsFavHandler = (meetupId) => {
  //   return userFavs.some((meetup) => meetup.id === meetupId);
  // };

  const store = {
    getDataFromJson,

    chooseCategoryState,
    chooseCategoryOtherFoodFunc,

    chooseCategoryPetState,
    chooseCategoryPetFoodFunc,

    petOnOtherOffVisible,
    petOnHeaderOffVisibleFunc,

    getImageArray,

    addToCartFunc,
    removeFromCartFunc,
    cart,
    clearAllCartFunc,

    handleSearchFunc,
    searchState,

    addToCheckoutFunc,
    checkoutList

  }

  return (
    <ContextWrapper.Provider value={store}>
      {props.children}
    </ContextWrapper.Provider>
  )
}

export default ContextWrapper
