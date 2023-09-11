import ListMenu from './ListMenu';

const RestaurantCategory = (props: any) => {
  const { restaurantMenu, showMenuItems, setShowMenuItems } = props;

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex cursor-pointer justify-between"
        onClick={() => {
          setShowMenuItems();
        }}
      >
        <span className="font-medium text-base">
          {restaurantMenu?.title} ({restaurantMenu?.itemCards?.length})
        </span>
        {showMenuItems ? <span>▲</span> : <span>▼</span>}
      </div>
      {showMenuItems && <ListMenu ItemList={restaurantMenu?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
