import logo from "./logo2.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
let Header = () => {  
  let [loginBtn,setLoginBtn]=useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img" width={"70px"}></img>
        </div>
        <div className="nav-list">
          <ul>
            <li><Link to={"./" } style={{ textDecoration: 'none',color: 'black'}}>Home</Link></li>
            <li><Link to={"./about"} style={{ textDecoration: 'none',color: 'black' }}>About Us</Link></li>
            <li><Link to={"./contact"} style={{ textDecoration: 'none',color: 'black' }}>Contact Us</Link></li>
            <li><Link to={"./cart"} style={{ textDecoration: 'none' ,color: 'black'}}>Cart</Link></li>
            <button onClick={()=>{
              loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login")
            }}>{loginBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;