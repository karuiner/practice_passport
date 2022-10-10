import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Main from "./Main";
const mainHeight = Math.floor((window.innerHeight - 100) / 100);

export default function Resister() {
  const navi = useNavigate();
  return (
    <Container className="h-100 w-100">
      회원가입
      <Button
        onClick={() => {
          navi(-1);
        }}
      >
        돌아가기{" "}
      </Button>
      <Form action="http://localhost:4000/signup" method="post">
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter userName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
