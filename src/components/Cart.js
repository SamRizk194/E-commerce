import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Cart() {
  return (
    <Container>
      <h1 className="py-5">welcome to cart</h1>
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
export default Cart;
