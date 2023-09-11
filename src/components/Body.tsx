import { ReactNode, useEffect, useState, FC, SetStateAction } from 'react';
import RestaurantCardComponent, { withPromotedLabel } from './RestaurantCard';
import { Shimmer } from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../custom/useOnlineStatus';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';
import { BODY_URL } from '../utils/urls';

const BodyComponent: FC = (): ReactNode => {
  const [filteredList, setFilteredList] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [restaurantList, setRestaurantList] = useState<any[]>([]);

  const PromotedRestaurant = withPromotedLabel(RestaurantCardComponent);

  const fetchData = async () => {
    const data = await fetch(BODY_URL);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
  };

  const getData = () => {
    const filteredList = restaurantList?.filter((elem) => {
      return elem.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredList(filteredList);
  };

  // fetching all data initially
  useEffect(() => {
    fetchData();
  }, []);

  //debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getData();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchText]);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Looks like your connection was lost. Please check your internet
        connection!
      </h1>
    );

  if (!restaurantList?.length) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex justify-around">
        <div className="flex gap-3 items-center mx-3">
          <TextField
            className="bg-yellow-400 rounded-lg outline outline-3 outline-offset-1"
            id="input-with-icon-textfield"
            type="text"
            value={searchText}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            variant="standard"
          />

          <button
            className="m-1.5 p-2 bg-yellow-400 rounded-md"
            type="submit"
            onClick={getData}
          >
            Search
          </button>
        </div>
        <button
          className="m-1.5 p-2 bg-yellow-400 rounded-md"
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
      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link
            to={'restaurants/' + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <PromotedRestaurant restaurantData={restaurant} />
            ) : (
              <RestaurantCardComponent restaurantData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
