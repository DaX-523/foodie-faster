import { Shimmer } from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurant from '../custom/useRestaurant';
import { FC, ReactNode, useState } from 'react';
import { RestaurantInfo } from '../common/restaurantInfo';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu: FC = (): ReactNode => {
  const { resId } = useParams();
  const [showMenuItems, setShowMenuItems] = useState<number | null>(null);

  const restaurant = useRestaurant(resId);
  const restaurantInfo: Partial<RestaurantInfo> =
    restaurant[0]?.card?.card?.info;
  const restaurantMenu: any[] =
    restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (restro: any) => {
        return (
          restro?.card?.['card']?.['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        );
      }
    );

  if (!Object.entries(restaurant).length) return <Shimmer />;

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
    <div className="flex items-center flex-col">
      <div className="flex shadow-lg w-6/12 justify-between items-center my-2 p-4 border border-dashed border-b-black">
        <div className="flex flex-col">
          <h2 className="my-2 font-bold text-xl">{name}</h2>
          <p className="text-xs text-gray-500">{cuisines?.join(', ')}</p>
          <p className="text-xs text-gray-400">
            {areaName}, {city}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-green-800">⭐ {avgRating}</h3>
          <p className="text-xs">{totalRatingsString}</p>
        </div>
      </div>
      <div className="flex gap-4 justify-start items-center w-6/12 ml-2">
        <h3 className="font-semibold text-lg">
          <TimelapseIcon />
          {sla?.slaString}
        </h3>
        <h3>
          <CurrencyRupeeIcon />
          {costForTwoMessage}
        </h3>
      </div>
      {restaurantMenu.map((restaurant: any, index: number) => (
        // Controlled Component
        <RestaurantCategory
          key={restaurant?.card?.card?.title}
          restaurantMenu={restaurant?.card?.card}
          showMenuItems={index === showMenuItems}
          setShowMenuItems={() => {
            if (index === showMenuItems) {
              return setShowMenuItems(null);
            }
            return setShowMenuItems(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
