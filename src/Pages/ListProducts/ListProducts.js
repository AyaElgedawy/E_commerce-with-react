import Nav from 'react-bootstrap/Nav';
import axios from "axios"
import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar.js";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Component, useEffect, useState } from "react"
import ProductCard from '../../Components/ProductCard.js'
// import Pagination from '../Components/Pagination.js';
import { Pagination, Button } from 'react-bootstrap';
import { addFav,removeFav} from '../../Store/Actions/FavAction.js';
import { useSelector, useDispatch } from "react-redux"
import ReactPaginate from 'react-paginate';
import PaginationComponent from '../../Components/Pagination.js';
import { getCategories, getCategory, getProducts } from '../../Store/Actions/ProductsAction.js';
import "./ListProducts.css"
import { addToCart, removeFromCart } from '../../Store/Actions/CartAction.js';
import { useContext } from 'react';
import { LoggedInContext } from '../../Context/loggedUser.js';


function ListProducts(){

    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const products = useSelector((state) => state.combineProducts.products)
    // const categories = useSelector((state)=> state.combineProducts.categories)
console.log(products)
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // You can change this according to your requirements
  
    
      useEffect(() => {
        // axios.get("https://dummyjson.com/products")
        // .then((res) => setProducts(res.data.products))
        // .then((res) => console.log(res.data))
        // .catch((err) => console.log(err))
        dispatch(getProducts())
        // dispatch(getCategories())
    },[])   
  
    //Pagination
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    //pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const {contextLoggedIn, setContextLoggenIn} = useContext(LoggedInContext)

    const [search, setSearch] = useState('');
    
    const fav = useSelector((state) => state.combineFav.Fav)

    const [login,setLogin]= useState(true)
    const Favorites= (product)=>{
      if(contextLoggedIn){
        dispatch(addFav(product))
      }
      else{
        setLogin(false)
      }
    }
    const removeFavourite=(id) =>{
      dispatch(removeFav(id))
    }

    const cart = useSelector((state) => state.combineCart.Cart)

    const addCart= (product)=>{
      if(contextLoggedIn){
        dispatch(addToCart(product))
      }else{
    // const myTimeout = setTimeout(loginError, 3000);
        setLogin(false)
      }
    }
     const removeCart= (id) =>{
      dispatch(removeFromCart(id))
    }
    const filterCategory= (category) =>{
      dispatch(getCategory(category))
    }

function loginError(){
  setLogin(false)
}
    
    return(
        <>
        

    <div className="container bg-white">
        <form>
          {/* <input className='my-3' onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Search contacts'/> */}
          <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div className="input-group">
              <div className="input-group-prepend">
                <button id="button-addon2" type="submit" className="btn btn-link text-warning"><i className="fa fa-search"></i></button>
              </div>
              <input type="search" placeholder="What're you searching for?" onChange={(e) => setSearch(e.target.value)} value={search} aria-describedby="button-addon2" className="form-control border-0 bg-light" />
            </div>
          </div>
        </form>

    <h2>Products</h2>
    
    {!login && (
      <div className='text-center'>
      <span className="text-danger">{` You must Log in first`}</span>
      <Link to="/Login">go here</Link> 
      </div>
      )}
    <div className="row">

    {currentItems.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((product) => (
    <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center product-item my-3">
    
    <div className="product"><Link to={`/productdetails/${product.id}`}> <img src={product.images[0]} alt="" /> </Link>
        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
            {/* <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li> */}
            <li className={`icon mx-3 ${fav.some(obj => obj.id === product.id) && "click" }`} 
            onClick= {fav.some(obj => obj.id === product.id) ? ()=>removeFavourite(product.id)  : ()=>Favorites(product)}>
            <span className={`fas fa-heart `} >
                 </span>
                
            </li>
            <li className={`icon ${cart.some(obj => obj.id === product.id) && "click" }`}
            onClick= {cart.some(obj => obj.id === product.id) ? ()=>removeCart(product.id)  : ()=>addCart(product)}>
              <span className="fas fa-shopping-bag"></span>
              </li>
        </ul>
    </div>
    <div className="tag bg-warning">{product.stock < 50 && "Low in stock"}</div>
    
    <div className="tag bg-red">{product.stock >= 50 && "Best Seller"}</div>

    <div className="title pt-4 pb-1">{product.title}</div>
    <div className="d-flex align-content-center justify-content-center">
         <span className={product.rating < 4.9 ? "fas fa-star" : "fas fa-star dis"}></span >
         <span className={product.rating < 4.7 ? "fas fa-star" : "fas fa-star dis"}></span> 
         <span className={product.rating < 4.5 ? "fas fa-star" : "fas fa-star dis"}></span> 
         <span className={product.rating < 4.3 ? "fas fa-star" : "fas fa-star dis"}></span> 
         <span className={product.rating < 4.1 ? "fas fa-star" : "fas fa-star dis"}></span>
          </div>
    <div className="price">{product.price} </div>
</div>
            ))} 
        
       
    </div>
    {/* Render the pagination component */}
       <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      /> 
    
</div>

        </>
    )
}

export default ListProducts