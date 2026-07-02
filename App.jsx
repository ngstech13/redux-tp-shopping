import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { initStore, addToCart, removeFromCart } from './actions/actions'
import ProductPage from './components/ProductPage'
import Nav from './components/Nav'
import Cart from './components/Cart'
import { connect } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const products = useSelector(state=>state.products);
  const [activeTab, setActiveTab] = useState("items");
  const selectedCartItems = [];
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then( response => response.json())
    .then( (result) => { 
      dispatch(initStore(result));

      } );
  }, []);
  return (
    <>
      <div className="App">
        <Nav activePage={activeTab} onTabChange={setActiveTab} />
      <div className='App-content'>
        <Content tab={activeTab} selectedCartItems={selectedCartItems} />
      </div>
    </div>
    </>
  )
}

const Content = ({tab, selectedCartItems}) => {
  switch(tab) {
    default:
      case 'items' : return <ProductPage cart={selectedCartItems}/>
      case 'cart' : return <Cart cart={selectedCartItems}/>
  }
}

function select(state){
  return {
    selectedCartItems: state.cart
  }
}

export default connect(select)(App)
