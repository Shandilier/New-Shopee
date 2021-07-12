import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Default from './components/Default';
import {Switch,Route} from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path = "/products" component = {ProductList}/>
        <Route exact path = "/details" component = {ProductDetail}/>
        <Route exact path = "/cart" component = {Cart}/>
        <Route component = {Default}/>
      </Switch>

    </React.Fragment>
  );
}

export default App;
