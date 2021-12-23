
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
  const clearedOneItem = (text) => notifications.showNotification({
    color: 'red',
    message: `removed ${text} from cart`,
  });

  const { isAuthenticated } = useAuth0();
  const [shoppingCartMenu, setCartMenu] = useState(false);
  const [notSignedIn, setNotSignedIn] = useState(false);

  const [cartItems, setItems] = useState([]);

  const changeCartState = () => {
    if (!isAuthenticated) return setNotSignedIn(true);
    return setCartMenu(!shoppingCartMenu);
  }

  /**
   * Delete single item from shopping cart.
   */
  const removeOne = (items) => {
    clearedOneItem(items.description)
    return setItems(cartItems.filter(item => item.product_id !== items.product_id))
  }
  /**
   * delete all from cart function
   */
  const deleteAllCartItems = () => setItems([]);
  /**
   * Function to add items to the cart.
   */
  const addItemsToCarts = (theItem) => setItems(cartItems => [...cartItems, theItem])

  /**
   * Main items on / page
   */
  const [items, setMainItems] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/items');
      console.log(res)
      const dataa = await res.json()
      return setMainItems(dataa);
    })()
  }, []);

  return (

      <BrowserRouter>
        <Nav changeCartState={changeCartState} cartItems={cartItems} />
        {shoppingCartMenu ? <ShoppingCart cartItems={cartItems} deleteAllCartItems={deleteAllCartItems} removeOne={removeOne} /> : null}
        {notSignedIn ? <div className="fixed right-5 top-20">Please sign in first.</div> : null}
        <Routes>
          <Route path="/" element={<MainnPage items={items} addItemsToCarts={addItemsToCarts}/>} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}
