import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Title from "./title";
import { ContextProvider } from "./context/ContextProvider";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <GoogleOAuthProvider>
        <Title />
        <App/>
      </GoogleOAuthProvider>
    </ContextProvider>
  </React.StrictMode>
);
