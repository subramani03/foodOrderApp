import logo from "./logo2.jpg";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";
import {useSelector} from "react-redux";
let Header = () => {  
  const data=useContext(UserContext);
  let [loginBtn,setLoginBtn]=useState("Login");
 let cartItem = useSelector((store)=>store.cart.items);
    return (
      <div className="flex justify-between items-center shadow-5xl" >
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img" width={"70px"}></img>
        </div>
        <div className="nav-list">
          <ul className="flex">
            <li className="mx-2 text-sm  mt-2 hover:border-b-2 border-orange-400"><Link to={"./" } style={{ textDecoration: 'none',color: 'black'}}>Home</Link></li>
            <li className="mx-2 text-sm  mt-2 hover:border-b-2 border-orange-400"><Link to={"./about"} style={{ textDecoration: 'none',color: 'black' }}>About Us</Link></li>
            <li className="mx-2 text-sm  mt-2 hover:border-b-2 border-orange-400"><Link to={"./contact"} style={{ textDecoration: 'none',color: 'black' }}>Contact Us</Link></li>
            <li className="mx-2 text-sm mt-2 hover:border-b-2 border-orange-400"><Link to={"./cart"} style={{ textDecoration: 'none' ,color: 'black'}}>Cart{"("+cartItem.length+")"}</Link></li>
            <button className="mx-2 text-sm bg-orange-400 text-white p-2  rounded-2xl" onClick={()=>{
              loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login")
            }}>{loginBtn}</button>
               <li className="mx-2 text-sm mt-2 hover:border-b-2 border-orange-400">{data.loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;