
import Nav from './Components/NavBar/Nav';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import MainnPage from './Pages/MainPage';
import Footer from './Components/Footer/Footer'
import Checkout from './Pages/Checkout';
import phoneTypes from '../phoneTypes.mjs';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNotifications } from '@mantine/notifications';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


export default function Index() {
  /**
   * bottom right notificiations 
   */
  const notifications = useNotifications();
  const notifFunction = (color, text) => notifications.showNotification({
    color: color,
    message: text,
  });

  /**
   * Auth0 hook.
   */
  const { isAuthenticated } = useAuth0();

  /**
   * all of the main items.
   */
  const [items, setMainItems] = useState([]);

  /**
   * handing the notSignedIn text if user isnt signed in.
   */
  const [notSignedIn, setNotSignedIn] = useState(false);

  /**
   * Setting the shopping cart menu open or closed.
   */
  const [shoppingCartMenu, setCartMenu] = useState(false);

  /**
   * Items in the cart.
   */
  const [cartItems, setItems] = useState([]);

  /**
   * Which category state, for main page.
   * also defining different phone types here for now I guess.
  */
  const [whichCard, setWhichCard] = useState({
    type: 1,
    activeObject: null,
    objectsArray: phoneTypes
  });

  /**
   * Handling opening and closing the shopping cart menu.
   */
  const changeCartState = () => {
    if (!isAuthenticated) return setNotSignedIn(true);
    return setCartMenu(prev => !prev);
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
    theItem.buyCount ? theItem.buyCount++ : theItem.buyCount = 1;
    setItems(cartItems => [...cartItems, theItem])
    return notifFunction('green', 'Added to cart ✔️');
  }

  /**
   * Loading data from the database
   */
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/items');
      const dataa = await res.json()
      return setMainItems(dataa);
    })()
  }, []);

  /**
   * Rendering app
   */
  return (
    <BrowserRouter>
      <Nav changeCartState={changeCartState} cartItems={cartItems} />
      {shoppingCartMenu && <ShoppingCart cartItems={cartItems} deleteAllCartItems={deleteAllCartItems} removeOne={removeOne} setCartMenu={setCartMenu} />}
      {notSignedIn && <div className="fixed right-5 top-20">Please sign in first.</div>}
      <div>
        <Routes>
          <Route path="/" element={<MainnPage items={items} addItemsToCarts={addItemsToCarts} setWhichCard={setWhichCard} whichCard={whichCard} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}