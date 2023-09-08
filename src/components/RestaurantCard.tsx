import { CDN_URL } from '../utils/urls';

const RestaurantCardComponent = (props: { restaurantData: any }) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } = restaurantData.info;
  const deliveryTime = restaurantData.info.sla.slaString;
  return (
    <div className="card-container">
      <img
        className="card-img"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>Estimated delivery time {deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCardComponent;
