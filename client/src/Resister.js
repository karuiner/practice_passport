import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Form, Route, Routes, useNavigate } from "react-router-dom";
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
      {/* <Form
      action="localhost:4000/resister"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target);
      }}
      >
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter userName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </Container>
  );
}
