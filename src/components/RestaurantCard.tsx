import { FC, ReactNode } from 'react';
import { CDN_URL } from '../utils/urls.ts';

const RestaurantCardComponent: FC<{ restaurantData: any }> = (props: {
  restaurantData: any;
}): ReactNode => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } = restaurantData.info;
  const deliveryTime = restaurantData.info.sla.slaString;
  return (
    <div className="m-4 p-4 w-64 bg-slate-100 hover:bg-slate-200">
      <img
        className="my-4 rounded"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant image"
      />
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <h4 className="mr-1">
          ⭐ {avgRating % 1 > 0 ? avgRating : avgRating + '.0'}
        </h4>
      </div>
      <h6>{cuisines.join(', ')}</h6>
      <h4 className="font-medium">{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCardComponent;
