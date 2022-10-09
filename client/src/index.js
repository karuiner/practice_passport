import * as React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { routes } from "./App";

// let router = createBrowserRouter(routes);

// ReactDOM.createRoot(
//   document.getElementById("app"),
//   <React.StrictMode>
//     <RouterProvider router={router} fallbackElement={null} />
//   </React.StrictMode>
// );
