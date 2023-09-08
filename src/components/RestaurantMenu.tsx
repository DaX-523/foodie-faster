import { useEffect, useState } from 'react';
import { Shimmer } from './Shimmer';
import { useParams } from 'react-router-dom';
import { RestaurantInfo } from '../common/restaurantInfo';
import { MENU_URL } from '../utils/urls.js';

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState<Partial<RestaurantInfo>>(
    {}
  );

  const { resId } = useParams();

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!Object.entries(restaurantInfo).length) return <Shimmer />;

  const {
    areaName,
    name,
    avgRating,
    city,
    costForTwoMessage,
    sla,
    totalRatingsString,
    cuisines
  } = restaurantInfo!;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        {areaName}, {city}
      </p>
      <h3>{avgRating}</h3>
      <h3>{sla?.slaString}</h3>
      <h4>{totalRatingsString}</h4>
      <h3>{costForTwoMessage}</h3>
      <p>{cuisines?.join(', ')}</p>
    </div>
  );
};

export default RestaurantMenu;
