import axios from "axios"
// import { useDispatch } from "react-redux"

export const getProducts = () => (dispatch) => {
    return axios.get("https://dummyjson.com/products/")
    .then ((res) => dispatch({
        type: "Get_Products",
        payload: res.data.products
    }))
    .catch((err) => console.log(err))
    
}

export const getCategories = () => (dispatch) => {
    return axios.get("https://dummyjson.com/products/categories")
    .then ((res) => dispatch({
        type: "Get_Categories",
        payload: res.data
    }))
    .catch((err)=> console.log(err))
}

export const getCategory = (payload) => ({ // object
    type: 'category',
    payload
    
   
  })
// brand
// : 
// "Apple"
// category
// : 
// "smartphones"
// description
// : 
// "An apple mobile which is nothing like apple"
// discountPercentage
// : 
// 12.96
// id
// : 
// 1
// images
// : 
// Array(5)
// 0
// : 
// "https://cdn.dummyjson.com/product-images/1/1.jpg"
// 1
// : 
// "https://cdn.dummyjson.com/product-images/1/2.jpg"
// 2
// : 
// "https://cdn.dummyjson.com/product-images/1/3.jpg"
// 3
// : 
// "https://cdn.dummyjson.com/product-images/1/4.jpg"
// 4
// : 
// "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
// length
// : 
// 5
// [[Prototype]]
// : 
// Array(0)
// price
// : 
// 549
// rating
// :  
// 4.69
// stock
// : 
// 94
// thumbnail
// : 
// "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
// title
// : 
// "iPhone 9"