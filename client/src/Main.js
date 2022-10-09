import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Resister from "./Resister";
const mainHeight = Math.floor((window.innerHeight - 100) / 100);

function Main() {
  const navi = useNavigate();
  return (
    <Container className="h-100 w-100">
      <Row className="w-100 justify-content-md-center">
        <Col md="auto">
          <Button
            onClick={() => {
              navi("/signup");
            }}
          >
            회원가입
          </Button>
        </Col>
        <Col md="auto">
          <Button
            onClick={() => {
              navi("/login");
            }}
          >
            로그인
          </Button>
        </Col>
      </Row>
      <Row className="w-100">
        <Outlet></Outlet>
      </Row>
    </Container>
  );
}

export default Main;
