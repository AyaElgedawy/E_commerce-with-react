import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from "react-redux";
import { LangContext } from "../../Context/langContext";
import "./Navbar.css"
import Favourite from "./favorites.png"
import shopping from "./cart.png"
import { LoggedInContext } from "../../Context/loggedUser";
function Navbar(){
 const {contextLoggedIn, setContextLoggenIn} = useContext(LoggedInContext)

    const fav = useSelector((state) => state.combineFav.Fav)
    const {contextLang, setContextLang} = useContext(LangContext)
    const cart = useSelector((state) => state.combineCart.Cart)
    //  let storedUser = (localStorage.getItem("loginUser"))
//     useEffect(() => {   
//    const user = localStorage.getItem("loginUser")
//         if(user){
//           setContextLoggenIn(JSON.parse(user))
//         }
//     }, []);    
   const logOut=()=>{
    localStorage.removeItem("loginUser")
    setContextLoggenIn("")
    
   }
       
    return(
        <>
        
    {/* <nav classNameName="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div classNameName="container-fluid bg-dark  ">
            <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span classNameName="navbar-toggler-icon"></span>
            </button>
            <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li classNameName="nav-item">
                <Link classNameName="nav-link active text-warning" aria-current="page" to="/Register">Register</Link>
                </li>
                <li classNameName="nav-item">
                    <Link classNameName="nav-link text-warning" to="/Login">Login</Link>
                </li>
                <li classNameName="nav-item">
                    <Link classNameName="nav-link text-warning" to="/">List Movies</Link>
                </li>
                <li classNameName="nav-item">
                    <Link classNameName="nav-link text-warning" to="/Favourites">Favourites  <sup>{fav.length}</sup></Link>
                </li>
                
            </ul>
            
            </div>
        </div>
    </nav> */}
        


        <div id="header">
        <div className="container">
             <nav className="navbar navbar-expand-lg navbar-dark "> {/*position-relative */}
             <div class="container-fluid">
                <div className="navbar-brand " href="#">
                    <Link to="https://mdenjamulislam.github.io/"><h2 className="logo"><strong>S</strong>hop</h2></Link>
                </div>
                <button className="navbar-toggler navbar_toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                {/* <div className="navbar-brand d-none d-lg-block position-absolute start-0">
                        <Link to="#"><h2 className="logo center-logo "><strong>E</strong>njam</h2></Link>
                    </div> */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Products">Shop</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="#">Gallery</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Cart"><img src={shopping} alt="" /> {`Cart (${cart.length})`}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Favourites"><img src={Favourite} alt="" /> {`Favourite (${fav.length})`}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">{`${!contextLoggedIn ? "Login" : "" }`}</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to="/Register">{`${!contextLoggedIn ? "Sign up" :"" }`}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">{`${contextLoggedIn ? "Hello " + contextLoggedIn.username : "" }`}</Link>
                        </li>
                        <li className="nav-item" onClick={logOut}>
                            <Link className="nav-link" to="/">{`${contextLoggedIn ? "Log out" : ""    }`}</Link>
                        </li>
                       
                    </ul>
                    
                    
                </div>
                </div> 
            </nav>
        </div>
    </div>



        </>
    )
}

export default Navbar