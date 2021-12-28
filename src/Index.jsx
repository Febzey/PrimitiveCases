import Nav from './Components/NavBar/Nav';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import MainnPage from './Pages/MainPage';
import Footer from './Components/Footer/Footer'
import Checkout from './Pages/Checkout';
import { phoneTypes, testData } from '../phoneTypes.mjs';
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
   * controlling dropdown menu in navbar
   */
  const [dropdown, setDropdown] = useState(false);

  /**
   * Items in the cart.
   */
  const [cartItems, setItems] = useState(new Map());

  /**
   * total price for shopping cart items.
   */
  const [totalPriceAndItems, setTotalPriceAndItems] = useState({
    totalPrice: 0,
    totalItems: 0
  });

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
  const removeOne = items => {
    notifFunction('red', `removed ${items.description} from cart.`)
    setTotalPriceAndItems(prevState => { return { totalPrice: prevState.totalPrice - items.price, totalItems: prevState.totalItems - 1 } });
    setItems(currentCartItems => {
      if (!currentCartItems.has(items.product_id)) return;
      const fromMap = currentCartItems.get(items.product_id)
      fromMap.buyCount--;
      if (fromMap.buyCount == 0) {
        currentCartItems.delete(items.product_id);
        return new Map([...currentCartItems]);
      }
      return currentCartItems.set(items.product_id, fromMap);
    })
  }
  /**
   * Function to add items to the cart.
   */
  const addItemsToCarts = async theItem => {
    if (!isAuthenticated) return notifFunction('red', 'Please Sign in to purchase.');
    notifFunction('green', 'Added to cart ✔️');
    setTotalPriceAndItems(prevState => { return { totalPrice: prevState.totalPrice + theItem.price, totalItems: prevState.totalItems + 1 } });
    return setItems(currentCartItems => {
      if (currentCartItems.has(theItem.product_id)) {
        return currentCartItems.set(theItem.product_id, {
          ...theItem,
          buyCount: ++currentCartItems.get(theItem.product_id).buyCount
        })
      }
      else return currentCartItems.set(theItem.product_id, { ...theItem, buyCount: 1 })
    })
  }

  /**
   * delete all from cart function
   */
  const deleteAllCartItems = () => {
    notifFunction('red', 'Cart Cleared.')
    setItems(new Map());
    setTotalPriceAndItems({ totalPrice: 0, totalItems: 0 });
    return
  };


  const [moon, setDarkMode] = useState();
  const changeMode = () => {
    moon ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    setDarkMode(!moon);
  }
  /**
   * Loading data from the database
   */
  useEffect(() => {

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setDarkMode(false);
    } else {
      setDarkMode(true)
      document.documentElement.classList.remove('dark')

    }

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
      <Nav changeCartState={changeCartState} cartItems={cartItems} dropdown={dropdown} setDropdown={setDropdown} moon={moon} changeMode={changeMode} />
      {shoppingCartMenu && <ShoppingCart cartItems={cartItems} deleteAllCartItems={deleteAllCartItems} removeOne={removeOne} setCartMenu={setCartMenu} totalPriceAndItems={totalPriceAndItems} />}
      {notSignedIn && <div className="fixed right-5 top-20">Please sign in first.</div>}
      <div onClick={() => dropdown && setDropdown(false)}>
        <Routes>
          <Route path="/" element={<MainnPage items={items} addItemsToCarts={addItemsToCarts} setWhichCard={setWhichCard} whichCard={whichCard} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} removeOne={removeOne} totalPriceAndItems={totalPriceAndItems} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}