import { useState, useEffect } from 'react';
import { RestaurantInfo } from '../common/restaurantInfo';
import { MENU_URL } from '../utils/urls.ts';

const useRestaurantInfo = (resId: string | undefined) => {
  const [restaurantInfo, setRestaurantInfo] = useState<Partial<RestaurantInfo>>(
    {}
  );

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurantInfo;
};

export default useRestaurantInfo;
