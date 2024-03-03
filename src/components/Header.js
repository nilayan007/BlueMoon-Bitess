import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    const [LoginLogout,setLoginLogout] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="nav-wrapper">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="loginout" onClick={()=>{
                        LoginLogout == "Login"?setLoginLogout("Logout"):setLoginLogout("Login"); 
                    }}>{LoginLogout}</button>
                </ul>
            </div>

        </div>
    );
};

export default Header;