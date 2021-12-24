
import Nav from './Components/NavBar/Nav';
import { useState } from 'react';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import { useAuth0 } from '@auth0/auth0-react';
import { useNotifications } from '@mantine/notifications';
import MainnPage from './Pages/MainPage';
import Footer from './Components/Footer/Footer'
import { useEffect } from 'react';
import Checkout from './Pages/Checkout';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

export default function Index() {

  const notifications = useNotifications();
  const notifFunction = (color, text) => notifications.showNotification({
    color: color,
    message: text,
  });

  const { isAuthenticated } = useAuth0();
  const [shoppingCartMenu, setCartMenu] = useState(false);
  const [notSignedIn, setNotSignedIn] = useState(false);

  const [cartItems, setItems] = useState([]);

  const setNewCartItems = (arr) => setItems(arr)

  const changeCartState = () => {
    if (!isAuthenticated) return setNotSignedIn(true);
    return setCartMenu(!shoppingCartMenu);
  }

  /**
   * Delete single item from shopping cart.
   */
  const removeOne = (items) => {
    notifFunction('red', `removed ${items.description} from cart.`)
    items.buyCount = 0;
    return setItems(cartItems.filter(item => item.product_id !== items.product_id))
  }
  /**
   * delete all from cart function
   */
  const deleteAllCartItems = () => {
    notifFunction('red', 'Cart Cleared.')
    cartItems.map(item => item.buyCount = 0);
    return setItems([])
  };
  /**
   * Function to add items to the cart.
   */

  const addItemsToCarts = async (theItem) => {
    if (!isAuthenticated) return notifFunction('red', 'Please Sign in to purchase.');

    console.log(cartItems.map(item => item.product_id === theItem.product_id)[0]) 



    if (theItem.buyCount) theItem.buyCount++
    else theItem.buyCount = 1;


    setItems(cartItems => [...cartItems, theItem])
    return notifFunction('green', 'Added to cart ✔️');
  }


  /**
   * Which category state, for main page.
   */
  const [whichCard, setWhichCard] = useState({
    type: 1,
  });
  const changeCategory = (category) => setWhichCard(category);


  /**
   * 1 = iphone XS
   * 2 = iphone 12
   */

  const [items, setMainItems] = useState([
    {
      product_id: 1,
      color: "clear",
      type: 2,
      description: "Iphone 12 red case",
      imgUrl: "https://i.ebayimg.com/images/g/8tMAAOSw2hRhvR4M/s-l640.webp",
      price: 6.99,
      quantity: 1,
    },
    {
      product_id: 2,
      color: "black",
      type: 1,
      description: "Iphone XS Max - fuck what they think case",
      imgUrl: "https://cdn.discordapp.com/attachments/923337255882481735/923461477027938334/blackcase.png",
      price: 15.99,
      quantity: 2,
    }
  ]);



  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch('/api/items');
  //     const dataa = await res.json()
  //     return setMainItems(dataa);
  //   })()
  // }, []);

  return (
    <BrowserRouter>
      <Nav changeCartState={changeCartState} cartItems={cartItems} />
      {shoppingCartMenu ? <ShoppingCart cartItems={cartItems} deleteAllCartItems={deleteAllCartItems} removeOne={removeOne} setNewCartItems={setNewCartItems} /> : null}
      {notSignedIn ? <div className="fixed right-5 top-20">Please sign in first.</div> : null}
      <Routes>
        <Route
          path="/"
          element={<MainnPage
            items={items}
            addItemsToCarts={addItemsToCarts}
            changeCategory={changeCategory}
            whichCard={whichCard} />} />
        <Route
          path="/checkout"
          element={<Checkout
            cartItems={cartItems} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}