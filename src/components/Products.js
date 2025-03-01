import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/slices/product-slice";
import { addToCart } from "../rtk/slices/cart-slice";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Container className="py-5">
      <Row className="py-5">
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price}$</Card.Text>
                  <Button
                    onClick={() => dispatch(addToCart(product))}
                    variant="primary"
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Products;
