import { Container, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clear } from "../rtk/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <Container>
      <h1 className="py-5">welcome to cart</h1>
      <Button
        className="mb-3"
        variant="primary"
        onClick={() => {
          dispatch(clear());
        }}
      >
        Clear Cart
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Image
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                ></Image>
              </td>
              <td>{product.price}$</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(removeFromCart(product));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
export default Cart;
