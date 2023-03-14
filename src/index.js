import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserProvider from "./context/user-context";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </AuthContextProvider>
);
