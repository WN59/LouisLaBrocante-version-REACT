import React from 'react';
import './Register.css';

function Register() {
  return (
      <div>
          <form className="box">
              <h1>Register</h1>
              <input type="text" name="" placeholder="Username"></input>
              <input type="password" name="" placeholder="Password"></input>
              <input type="password" name="" placeholder="Confirm Password"></input>
              <input type="email" name="" placeholder="Email"></input>
              <input type="submit" name="" value="Register Account"></input>
          </form>
      </div>
  );
}

export default Register;
