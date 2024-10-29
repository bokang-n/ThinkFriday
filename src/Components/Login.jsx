// src/Components/Login.jsx
import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Use the same client ID

function Login() {
  const [userData, setUserData] = useState(null);

  const onSuccess = (res) => {
    const userObject = jwtDecode(res.credential);
    console.log("LOGIN SUCCESS! Current user: ", userObject);
    setUserData(userObject);
  };

  const onFailure = (res) => {
    console.log("Login Failed! res: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
      {userData && <p>Welcome, {userData.name}</p>}{" "}
      {/* Show user name if logged in */}
    </div>
  );
}

export default Login;
