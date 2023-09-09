import { ReactNode, useEffect, useState, FC } from 'react';
import RestaurantCardComponent from './RestaurantCard';
import { Shimmer } from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../custom/useOnlineStatus';

const BodyComponent: FC = (): ReactNode => {
  const [filteredList, setFilteredList] = useState<any[]>([]);
  const [searchText, setSearchText] = useState('');
  const [restaurantList, setRestaurantList] = useState<any[]>([]);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Looks like your connection was lost. Please check your internet
        connection!
      </h1>
    );

  if (!restaurantList.length) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={() => {
              const filteredList = restaurantList.filter((elem) => {
                return elem.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredList(filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="container">
        {filteredList.map((restaurant) => (
          <Link
            to={'restaurants/' + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCardComponent restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
