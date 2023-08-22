import React from "react";

const HeaderComponent = () => {
  return (
    <div className="nav-bar">
      <img className="img" src="https://banner2.cleanpng.com/20180702/vrt/kisspng-online-food-ordering-food-delivery-grubhub-5b3a1b75a36132.9626073015305347736692.jpg" alt="logo" />
      <div className="nav-links">

      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      </div>
    </div>
  )
}

const RestaurantCardComponent = () => {
  return (
    <div className="card-container">
      <img className="card-img" src="https://b.zmtcdn.com/data/pictures/chains/6/19447676/abd8bcf7f3c172b6a7f9058b0e21067c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="restaurant image" />
      <h3>Makhan Singh Da Dhaba</h3>
      <h4>Indian, Desi</h4>
    </div>
  )
}

const BodyComponent = () => {
  return (
   <div className="body">
    <div className="search">
      Search
    </div>
    <div className="container">
      <RestaurantCardComponent />
      <RestaurantCardComponent />
      <RestaurantCardComponent />
      <RestaurantCardComponent />
      <RestaurantCardComponent />
      <RestaurantCardComponent />
    </div>
    </div>
  )
}

const FooterComponent = () => {

}

// Top level component
export const AppComponent = () => {
  return (
    <div className="home">
      <HeaderComponent />
      <BodyComponent />
    </div>
  )
}

