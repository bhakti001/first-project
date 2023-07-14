import React, { useState } from "react";
import "./Dark.css";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const users = JSON.parse(localStorage.getItem('user')) ;
function onSubmit(e){
e.preventDefault();
const isExist = users.find (ele => ele.email === email && ele.password === password ) 
if (isExist){
    localStorage.setItem('loggedIn',true);
    navigate('/');
    setError()
}
}
  return (
    <div>
      <div className="app" >
        <div className="login">
          <h1> Login</h1>
          <div className="containeer">
            <p className="divider">
              <span>Or</span>
            </p>
            <form onSubmit={(e) => onSubmit(e)}>
    
              <label>E-mail</label>
              <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input type="password" placeholder="Enter your password"  onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button" style={{width:'260px'}}>Log In</button>
            {error && <span style={{ color: "red" }}>{error}</span>}
            </form>
            <div className="bottom">
              <p>Forget your password?</p>
              <Link href="/login">Reset Password</Link>
            </div>
            <Link to='/register' className="create">Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
