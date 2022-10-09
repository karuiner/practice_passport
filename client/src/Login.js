import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navi = useNavigate();
  return (
    // <Container className="h-100 w-100">
    //   <Button
    //     onClick={() => {
    //       navi(-1);
    //     }}
    //   >
    //     돌아가기{" "}
    //   </Button>
    //   <Form
    //     action="localhost:4000/login"
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       console.log(e.target);
    //     }}
    //   >
    //     <Form.Group className="mb-3" controlId="formBasicUserName">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control type="text" placeholder="Enter userName" />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control type="password" placeholder="Password" />
    //     </Form.Group>
    //     <Button variant="primary" type="submit">
    //       Submit
    //     </Button>
    //   </Form>
    // </Container>
    <div>login</div>
  );
}
