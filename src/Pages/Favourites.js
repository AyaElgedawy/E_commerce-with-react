import { useSelector } from "react-redux";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";

const Favourites= () => {
    const favorites = useSelector((state) => state.combineFav.Fav);
    return(
        <>
            <Container gap={3}>
      <Row>

        {favorites.map(product => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            
            <ProductCard  img={product.images[0]} link={product.id}  />

          </Col>
        ))}
      </Row>
    
      
    </Container>
        
        </>
    )
}
export default Favourites