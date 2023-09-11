import { useState, useEffect } from 'react';
import { RestaurantInfo } from '../common/restaurantInfo';
import { MENU_URL } from '../utils/urls.ts';

const useRestaurant = (resId: string | undefined) => {
  const [restaurant, setRestaurant] = useState<any[]>([]);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json?.data?.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurant;
};

export default useRestaurant;
