import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Pages/Login';
import Register from './Pages/Register';
import ToDoList from './Pages/ToDoList';
import ListProducts from './Pages/ListProducts/ListProducts';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import ProductDetails from './Pages/ProductDetails/ProductDetails.js'
import Favourites from './Pages/Favourites';
import { useState } from 'react';
import { LangContext } from './Context/langContext';
import Slider from './Components/Slider/Slider';
import Home from './Pages/Home';
import Cart from './Pages/Cart/Cart.js';
import { LoggedInContext } from './Context/loggedUser.js';
function App() {
  const [contextLang, setContextLang] = useState("En from context")
  const [contextLoggedIn, setContextLoggenIn] = useState("")
  return (
    <div>
    <LangContext.Provider value = {{contextLang, setContextLang}}>

    <LoggedInContext.Provider value={{contextLoggedIn, setContextLoggenIn}}>

    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path={"/Register"} component={Register} />
        <Route exact path={"/Login"} component={Login} />
        
        <Route exact path={"/Products"} component={ListProducts} />
        <Route exact path={"/"} component={Home} />

        <Route exact path={"/productdetails/:id"} component={ProductDetails}  />

        <Route exact path={"/Favourites"} component={Favourites} />
        <Route exact path={"/Cart"} component={Cart} />

      </Switch>
    </BrowserRouter>
    </LoggedInContext.Provider>
    </LangContext.Provider>
    </div>
    
    
  );
}

export default App;
