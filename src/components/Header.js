import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
    const [LoginLogout,setLoginLogout] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="nav-wrapper">
                <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link> {/*for navigating using the link */}
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
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