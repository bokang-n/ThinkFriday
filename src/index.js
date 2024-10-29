import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="340132019857-0u3h76jv6drem29q71g8rni5u8vi315t.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);
