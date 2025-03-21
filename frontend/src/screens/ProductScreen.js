import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, ListGroupItem, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
// import products from '../products';
import axios  from 'axios';

function ProductScreen() {
  const { id } = useParams();


  const [product, setProduct] = useState([])
  
  useEffect(() =>{

    async function fetchProduct(){
  const {data} = await axios.get(`/api/products/${id}`)
  
  setProduct(data)




  
}
fetchProduct()

  }, [])

  

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-light mb-3">Go Back</Link>
      <Row>
        {/* Product Image */}
        <Col md={6} className="text-center">
          <Image src={product.image} alt={product.name} fluid className="shadow-sm" />
        </Col>

        {/* Product Details */}
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2 className="fw-bold">{product.name}</h2>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={` ${product.numReviews} reviews`} color={'#f8e825'} />
            </ListGroup.Item>

            <ListGroup.Item>
              <h4 className="text-muted">Price: <span className="fw-bold text-dark">${product.price}</span></h4>
            </ListGroup.Item>

            <ListGroup.Item>
              Description : {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>
                Price:
                </Col>
                <Col>
                <strong>NPR{product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>
               Status: 
                </Col>
                <Col>
                {product.countInStock > 0? 'In Stock' : 'Out of stock'}
                </Col>
              </Row>
            </ListGroup.Item>


            <ListGroupItem>
              <Button className='w-100' disabled={product.countInStock == 0} type='button'>Add to cart</Button>
            </ListGroupItem>

          </ListGroup>
        </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
