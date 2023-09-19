import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./signin.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    navigate("/home");
    } 
  
  return (
    <>
      <div class="loginhead">
        <form onSubmit={login}>
          <h2>Log In to Your Account</h2>
          <div class="inputs">
            <label for="email">Username</label>
            <input
              class="inputbox"
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
            <label for="password">Password</label>
            <input
              class="inputbox"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>
          <button type="submit" style={{color: "inherit",textDecoration:"none",marginLeft:"-1px"}}><Link to="/home" style={{color: "inherit",textDecoration:"none"}}>Log in</Link></button>
          <p style={{textAlign:"center"}}>
            need an account ?<Link to="/sign" style={{color: "inherit",textDecoration:"none"}} >Sign up</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
}
export default Login;