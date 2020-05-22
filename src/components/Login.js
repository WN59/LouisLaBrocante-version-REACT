import React from 'react';
import { NavLink } from 'react-router-dom';
import Register from './Register';
import Home from './Website/Home';
import './Login.css';

function Login() {
  return (
      <div>
          <form className="box">
              <h1>Login</h1>
              <input type="text" name="" placeholder="Username"></input>
              <input type="password" name="" placeholder="Password"></input>
              <input type="submit" name="" value="Login"></input>
              
              <NavLink className="link" to="/register">Register</NavLink>
              <br></br>
              <NavLink className="link" to="/Home">Home</NavLink>
              
          </form>
      </div>
  );
}

export default Login;
