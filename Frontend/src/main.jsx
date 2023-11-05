import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import { RouterProvider } from "react-router-dom";
import RouterComp from "./router/router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Title from "./title";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider>
      <Title/>
      <RouterProvider router={RouterComp} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
