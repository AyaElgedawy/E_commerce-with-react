import { useParams } from "react-router-dom";
import { Component, useEffect, useState } from "react"
import axios from "axios"
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector } from "react-redux";
import "./ProductDetails.css"
function ProductDetails(props){
    const productId = useParams();
    // props.match.params.id
    // console.log(productId)

    // const [product, setproduct] = useState({})
    const products = useSelector((state) => state.combineProducts.products)
    const product = products[productId.id-1] 
    // useEffect(() => {
    //     axios.get(`https://dummyjson.com/products/${productId.id}`)
    //     .then((res) => setproduct(res.data))
    //     .catch((err) => console.log(err))
    //     // fetch(`https://dummyjson.com/products/${productId.id}`)
    //     // .then(res => res.json())
    //     // .then(setproduct);
    // },[])

    return(
        <>
            
             {/* <Container>
                <Row classNameName="my-4 d-flex align-items-center">
                    <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`${product.images[0]}`} />
                    </Card>
                    </Col>
                    <Col md={8}>
                    <Card>
                        <Card.Body>
                        <Card.Title>{product.brand}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                         <Card.Text>Release Date: {product.release_date}</Card.Text> 
                        <Card.Text>Rating: {product.rating}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container> */}



<section className="py-5">
  <div className="container">
    <div className="row gx-5">
      <aside className="col-lg-6">
        <div className="border rounded-4 mb-3 d-flex justify-content-center">
          <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="">
            <img style={{"max-width": "100%", "max-height": "100vh", "margin": "auto"}} className="rounded-4 fit" src={`${product.images[0]}`} />
          </a>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href={`${product.images[1]}`} >
            <img width="60" height="60" className="rounded-2" src={`${product.images[1]}`} />
          </a>
          <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href={`${product.images[2]}`} >
            <img width="60" height="60" className="rounded-2" src={`${product.images[2]}`} />
          </a>
          <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href={`${product.images[3]}`} >
            <img width="60" height="60" className="rounded-2" src={`${product.images[3]}`} />
          </a>
          
          <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href={`${product.images[4]}`} >
            <img width="60" height="60" className="rounded-2" src={`${product.images[4]}`} />
          </a>
        </div> 
        {/* <!-- thumbs-wrap.// --> */}
        {/* <!-- gallery-wrap .end// --> */}
      </aside>
      <main className="col-lg-6">
        <div className="ps-lg-3">
          <h4 className="title text-dark">
            {product.title}
          </h4>
          <div className="d-flex flex-row my-3">
            <div className="text-warning mb-1 me-2">
              
         <span className={product.rating < 4.9 ? "fa fa-star" : "fa fa-star dis"}></span >
         <span className={product.rating < 4.7 ? "fa fa-star" : "fa fa-star dis"}></span> 
         <span className={product.rating < 4.5 ? "fa fa-star" : "fa fa-star dis"}></span> 
         <span className={product.rating < 4.3 ? "fa fa-star" : "fa fa-star dis"}></span> 
         <span className={product.rating < 4.1 ? "fa fa-star" : "fa fa-star dis"}></span>
              <span className="ms-1">
                {product.rating}
              </span>
            </div>
            {/* <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span> */}
            <span className="text-success ms-2">In stock</span>
          </div>

          <div className="mb-3">
            <span className="h5">${product.price}</span>
            <span className="text-muted">/per box</span>
          </div>

          <p>
            {product.description}
          </p>

          <div className="row">
            
            <dt className="col-3">Color</dt>
            <dd className="col-9">Brown</dd>

            
            <dt className="col-3">Brand</dt>
            <dd className="col-9">{product.brand}</dd>
          </div>

          <hr />

          <div className="row mb-4">
            
            {/* <!-- col.// --> */}
            <div className="col-md-4 col-6 mb-3">
              <label className="mb-2 d-block">Quantity</label>
              <div className="input-group mb-3" style={{"width": "170px"}}>
                <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                  <i className="fas fa-minus"></i>
                </button>
                <input type="text" className="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          {/* <a href="#" className="btn btn-warning shadow-0"> Buy now </a> */}
          <a href="#" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>
          <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3"> <i className="me-1 fa fa-heart fa-lg"></i> Save </a>
        </div>
      </main>
    </div>
  </div>
</section>
{/* <!-- content --> */}

{/*  */}



        </>
    )
}

export default ProductDetails