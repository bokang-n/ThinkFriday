import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "../css/LoginModal.css";

const LoginModal = ({isOpen, onClose}) => {
    if(!isOpen) return null; //Don't render if open

    
const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    console.log(decoded);
}

const handleLoginError = () => {
    console.log("Login Failed!");
  }
const handleSubmit = (e) => {
    console.log(e.target);
} 

return(
    <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email Address" required/>
                <input type="password" placeholder="Password" required/>
                <button type="submit">Login</button>
            </form>
            <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
        </div>
    </div>
);
}

export default LoginModal;