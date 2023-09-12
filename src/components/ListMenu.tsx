import { useAppDispatch } from '../common/hooks';
import { addItem } from '../utils/cartSlice';
import { CDN_URL } from '../utils/urls';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ListMenu = (props: any) => {
  const { ItemList } = props;
  const dispatch = useAppDispatch();
  console.log(ItemList);

  const handleAddClick = (item: any) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {ItemList?.map((item: any) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="flex justify-between shadow-md shadow-slate-300 p-3"
          >
            <div className="flex flex-col border-b-2 py-4 gap-2">
              <h2 className="font-normal text-left">
                {item?.card?.info?.name}
              </h2>
              <div className="flex gap-2">
                <h6 className="text-xs">
                  ₹{' '}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </h6>
                {item?.card?.info?.offerTags && (
                  <h6
                    className="text-xs font-medium"
                    style={{
                      backgroundColor:
                        item?.card?.info?.offerTags[0]?.backgroundColor,
                      color: item?.card?.info?.offerTags[0]?.textColor
                    }}
                  >
                    |{item?.card?.info?.offerTags[0]?.title}|
                    {item?.card?.info?.offerTags[0]?.subTitle}
                  </h6>
                )}
              </div>
              <p className="text-[10px] text-slate-400">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-32 p-4">
              <div className="absolute">
                <button
                  className="relative bg-white border border-green-700 font-bold text-green-500 text-xs rounded p-1.5 top-12 left-8"
                  onClick={() => handleAddClick(item)}
                >
                  Add <AddShoppingCartIcon fontSize="inherit" />
                </button>
              </div>
              <img
                className="w-32 rounded-lg m-2"
                src={CDN_URL + item?.card?.info?.imageId}
                alt="Item Image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListMenu;
