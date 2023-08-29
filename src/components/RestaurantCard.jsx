const RestaurantCardComponent = (props) => {
  const { restaurantData } = props;
  const restaurant = restaurantData.info;
  const cuisines = restaurant.cuisine.map((elem) => elem.name);
  return (
    <div className="card-container">
      <img
        className="card-img"
        src={restaurant.image.url}
        alt="restaurant image"
      />
      <h3>{restaurant.name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{restaurant.rating.aggregate_rating} Rating</h4>
      <h4>Estimated delivery time {restaurantData.order.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCardComponent;
