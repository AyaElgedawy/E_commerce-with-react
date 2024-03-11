import { Link } from "react-router-dom"
import { Card, Button, Row } from 'react-bootstrap';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faHeart } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faCheckSquare, faHeart);

function ProductCard(props){



    return(
        <>
           



    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
          <FontAwesomeIcon className={props.display} variant={props.variant} onClick={props.onclick} icon="fa-solid fa-heart" />  

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.overview}</Card.Text>
        <Row className="d-flex justify-content-center" >
        <Link to={`/productdetails/${props.link}`}> 
        <Button variant="warning" style={{ width: '100%' }} >View Details</Button>
        </Link>
        
          
        
        </Row>
      </Card.Body>
    </Card>


    {/* <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div className="product"> <img src={props.img} alt="" />
                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                    <li className="icon mx-3"><span className="far fa-heart"></span></li>
                    <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <div className="tag bg-red">Best Selling</div>
            <div className="title pt-4 pb-1">{props.brand}</div>
            <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
            <div className="price">{props.price}</div>
        </div> */}
        </>
    )
}

export default ProductCard