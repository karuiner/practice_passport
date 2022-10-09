import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Resister from "./Resister";
const mainHeight = Math.floor((window.innerHeight - 100) / 100);

function Blank() {
  return <Container className="h-100 w-100"></Container>;
}

export default Blank;
