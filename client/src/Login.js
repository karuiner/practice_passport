import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({ userName: "", password: "" });
  const navi = useNavigate();
  return (
    <Container className="h-100 w-100">
      <Button
        onClick={() => {
          navi(-1);
        }}
      >
        돌아가기{" "}
      </Button>
      <Form
        action="http://localhost:4000/login"
        method="get"
        onSubmit={(e) => {
          e.preventDefault();
          if (data.userName.length >= 4 && data.password.length >= 4) {
            // const formData = new FormData();
            // formData.append("userName", data.userName);
            // formData.append("password", data.password);
            axios
              .post("http://localhost:4000/login", { ...data })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            setData({ userName: "", password: "" });
          }
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>userName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter userName"
            value={data.userName}
            onChange={(e) => {
              setData({ ...data, userName: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
