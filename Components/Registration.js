import React, { useState } from "react";
import { Alert } from "react-bootstrap";

import {Link, useNavigate} from "react-router-dom";


function Registration() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  

  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  
  const history = useNavigate();
  const navigate = () => history('/log');


  function handleFormSubmit(e) {
    e.preventDefault();

    if ( !email || !password ||!Cpassword) {
      setFlag(true);
    } 
    else if(password!==Cpassword){
      setFlag2(true);
    }
    else {
      
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem(
        "Password",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      
      navigate('/log');
    }
  }

  

 
  

  return (
    <>
 
    <div className = "outer"  >
    <div className = "inner"  >
         
            <form onSubmit={handleFormSubmit}>
            <h1>My Contacts</h1>
              <h3>Create Account</h3>

              <div >
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div >
                <label style={{paddingTop:'15px'}}>Password</label>
                <input
                  
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                
              </div>

              <div className="form-group">
                <label style={{paddingTop:'15px'}}>Confirm Password</label>
                <input
                
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setCPassword(event.target.value)}
                />
              </div>

              
              <button href="/log" type="submit" style={{marginTop:'30px'}} className="btn btn-primary btn-lg btn-block">
                Submit
              </button>

              <p> <Link to="/log"  className="forgot-password text-right">
                Already registered? Login</Link>
                
              </p>
              
              

              {flag && (
                <Alert color="primary" variant="danger">
                  Please enter all fields!
                </Alert>
              )}

              {flag2 && (
                <Alert color="primary" variant="danger">
                  Please enter same password in both fields!
                </Alert>
              )}

            </form>
            

            
        </div></div>
    
    </>
  );
}

export default Registration;  