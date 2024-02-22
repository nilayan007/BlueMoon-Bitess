import { discover } from "package";
import React from "react";
import  ReactDOM  from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
};
const RestaurentCard =()=>{
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/cf/3a/82/chicken-tikka.jpg"/>
            <h3>Nizam Restaurent</h3>
            <h4>Chicken Roll, Biriyani, kabaabs!!</h4>
            <h4>4.4 Stars</h4>
            <h4>38 mins</h4>
        </div>
    );
};
const Body = ()=>{
    return (
        <div className="body"> 
            <div className="search">Search</div>
            <div className="rescardcontainer">
                <RestaurentCard />
            </div>
        </div>
    );
};
const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);