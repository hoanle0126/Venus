import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import { RouterProvider } from "react-router-dom";
import RouterComp from "./router/router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Title from "./title";
import { ContextProvider } from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <GoogleOAuthProvider>
        <Title />
        <RouterProvider router={RouterComp} />
      </GoogleOAuthProvider>
    </ContextProvider>
  </React.StrictMode>
);
