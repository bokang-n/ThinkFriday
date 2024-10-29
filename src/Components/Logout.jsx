// src/Components/Logout.jsx
import React from "react";
import { googleLogout } from "@react-oauth/google";

const Logout = () => {
  const onSuccess = () => {
    console.log("Log out successful!");
  };

  return (
    <div id="signOutButton">
      <button onClick={() => googleLogout(onSuccess)}>Logout</button>
    </div>
  );
};

export default Logout;
