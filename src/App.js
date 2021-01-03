import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Shop from './components/shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
              <Shop></Shop>
          </Route>
          <Route path="/review">
               <Review></Review>
          </Route>
          <Route path="/manage">
               <Inventory></Inventory>
          </Route>
          <Route exact path="/">

          </Route>
          <Route path="/product/:productKey"> 
               {/* akhane kahini hoche ami jdi (: clone er mane ayta akta dynamic variable seta jar mane daowa thak tumi amak bole deba) ta na de tahole oy route ta se pabe jdi matro tumi fixed vabe localhost e productKey lekhi */}
                <ProductDetails></ProductDetails>
          </Route>
          <Route path="*"> /**akhane sob sese not found route hove */
              <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
