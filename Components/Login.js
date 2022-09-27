import React, { useState } from "react";
import { Alert } from "react-bootstrap";

import {Link,useNavigate} from "react-router-dom";
function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);
  const history = useNavigate();
  const navigate = () => history('/home');

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
      navigate('/home');
    }
  }

  return (
    <div className = "outer"  >
    <div className = "inner"  >
      
        <form onSubmit={handleLogin}>
        <h1>My Contacts</h1>
          <h3>User Login</h3>
          <div className="form-group">
            <label style={{paddingTop:'15px'}}>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{paddingTop:'15px'}}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button style={{marginTop:'55px'}} type="submit" className="btn btn-primary btn-lg btn-block">
            Login
          </button>

          <p> <Link to="/fp"  className="forgot-password text-right">
                Forgot Password? Reset </Link>
                
              </p>

          {flag && (
            <Alert color="primary" variant="warning">
              Invalid credentials. Please try again.
            </Alert>
          )}
        </form>
        
    </div></div>
  );
}

export default Login;