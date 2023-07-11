import React, { useState } from "react";
import "./Dark.css";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("user")) ?? [];
    const isExist = users.find((ele) => ele.email === email);
    if (isExist) {
      setError("Email is already registered");
    } else {
      const userData = [...users, { name, email, password }];
      localStorage.setItem("user", JSON.stringify([...userData]));
      localStorage.setItem('loggedIn',true)
      navigate("/");
    }
  }
  return (
    <div>
      <div className="app" >
        <div className="login">
          <h1> Register</h1>
          <div className="containeer">
            <p className="divider">
              <span>Or</span>
            </p>
            <form onSubmit={(e) => onSubmit(e)}>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}
              />
              <label>E-mail</label>
              <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input type="password" placeholder="Enter your password"  onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button" style={{width:'260px'}}>log In</button>
            {error && <span style={{ color: "red" }}>{error}</span>}
            </form>
            <div className="bottom">
              <p>Forget your password?</p>
              <Link to="/">Reset Password</Link>
            </div>
            <Link to='/login' className="create">Login Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
