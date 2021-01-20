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
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();  //context api create korlam

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
               //app er akdom root e usercontext ta debo and .provider debo. and ay provider er 2 ta value debo. akta loggedInuser ar akta setloggedinuser .(setloggedinuser dece karon jate amra tolay kono akta jayga theke setloggedinuser atak use kore ,ay loggedinuser ar value ta onno jaygay set kore felte pari. abong je je chay se se loggedinuser 1st valutak use kore felte pare)

    <UserContext.Provider value={[loggedInUser,setLoggedInUser]} >
      <p>login email:{loggedInUser.email}</p> 
      
      <Router>
                {/* switch er vitor jehetu router de nai sehetu ata common thakbe */}
      <Header></Header>
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
          <Route path="/login">
               <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            {/* shipmant ta normal route na, ata private route   */}
               <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path="/">

          </Route>
          <Route path="/product/:productKey"> 
               {/* akhane kahini hoche ami jdi (: clone er mane ayta akta dynamic variable seta jar mane daowa thak tumi amak bole deba) ta na de tahole oy route ta se pabe jdi matro tumi fixed vabe localhost e productKey lekhi */}
                <ProductDetails></ProductDetails>
          </Route>
          <Route path="*"> 
          {/* akhane sob sese not found route hove  */}
              <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      
      
    </UserContext.Provider>
  );
}

export default App;
