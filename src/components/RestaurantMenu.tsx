import { Shimmer } from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantInfo from '../custom/useRestaurantInfo';
import { FC, ReactNode } from 'react';

const RestaurantMenu: FC = (): ReactNode => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantInfo(resId);

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
    <div className="flex justify-center items-center">
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
