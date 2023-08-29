import { useState } from "react";
import { resData } from "../../utils/data";
import RestaurantCardComponent from "./RestaurantCard";

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState(resData.section);

  return (
    <div className="body">
      <div className="filter">
        <button
          type="button"
          onClick={() =>
            setRestaurantList(
              restaurantList.filter(
                (elem) => elem.info.rating.aggregate_rating >= "4.0"
              )
            )
          }
        >
          Filter
        </button>
      </div>
      <div className="container">
        {restaurantList.map((restaurant) => (
          <RestaurantCardComponent
            key={restaurant.info.resId}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
