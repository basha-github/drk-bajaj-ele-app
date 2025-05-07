import React from "react";

import '../css/drk-login.css'
import { useNavigate } from "react-router-dom";

export default function Login() {

    const emiform = useNavigate();

    const gotoEmi = ()=>{
        emiform("/emi");
    }


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
      <input 
      onClick={gotoEmi}
      type="submit" value="Login" 
      className="btn btn-warning" />
    
        </div>
      </div>
  );
}
