import React from "react";

import '../css/drk-login.css'

export default function Login() {
  return (
    <div>
        <div className="logincenter">
        UserName:
      <input type="text" />
      <br />
      <br/>
      
      password:
      <input type="password" />
      <br />
      <br/>
      <input type="submit" value="Login" 
      className="btn btn-warning" />
    
        </div>
      </div>
  );
}
