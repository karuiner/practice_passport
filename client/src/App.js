import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Resister from "./Resister";
import Blank from "./Blank";
const mainHeight = Math.floor((window.innerHeight - 100) / 100);

// export const routes = [
//   {
//     path: "/",
//     element: <Main />,
//     children: [
//       {
//         index: true,
//         element: <Blank />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "signup",
//         element: <Resister />,
//       },
//       {
//         path: "*",
//         element: <NoMatch />,
//       },
//     ],
//   },
// ];

function App() {
  return (
    <Container className="h-100 w-100">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Blank />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Resister />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Route>
      </Routes>
      <Outlet></Outlet>
    </Container>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
