import React from "react";
import { resData } from "../assets/data";

const HeaderComponent = () => {
  return (
    <div className="nav-bar">
      <img className="img" src="https://www.shutterstock.com/shutterstock/photos/788158552/display_1500/stock-vector-food-delivery-in-black-color-delivery-label-for-online-shopping-worldwide-shipping-vector-788158552.jpg" alt="logo" />
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

const RestaurantCardComponent = (props: any) => {
  const {restaurantData} = props;
  const restaurant = restaurantData.info;
  const cuisines = restaurant.cuisine.map((elem: any) => elem.name)
  return (
    <div className="card-container">
      <img className="card-img" src={restaurant.image.url} alt="restaurant image" />
      <h3>{restaurant.name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{restaurant.rating.aggregate_rating}</h4>
      <h4>{restaurantData.order.deliveryTime}</h4>
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
      {resData.section.map((restaurant: any) => <RestaurantCardComponent key={restaurant.info.resId} restaurantData={restaurant}/>)}
      
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

