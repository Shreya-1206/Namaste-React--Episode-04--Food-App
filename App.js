import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="img" src="https://media.istockphoto.com/id/1038355632/vector/hamburger-icon.jpg?s=612x612&w=0&k=20&c=0lwYqfJxkss5KKmDPAFZRJ9_2-z3h1tRAfFyAKpVEYU=" alt="logo" />
                <div className = "app-name">Namaste Gastronomy</div>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard =() => {
    return (
        <div className="res-card">
            <img alt = "res-img"src="https://b.zmtcdn.com/data/pictures/chains/1/50691/92d9b4053ef0965120828b4fa4eecc3b_o2_featured_v2.jpg"/>
            <h3>Meghana Foods</h3>
            <h5>South Indian, Briyani</h5>
            <h5>4.4 stars</h5>
            <h5>38 minutes</h5>
        </div>
    )
}
const Body =() => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    );
}
const AppLayout =() => { //main component
    return (
        // <h1>Hello Welcome to app 🍕</h1>
        <div className="app">
         <Header/>
         <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// ReactDOM.render(<AppLayout />, document.getElementById("root"));