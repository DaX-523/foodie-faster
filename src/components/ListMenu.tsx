import { CDN_URL } from '../utils/urls';

const ListMenu = (props: any) => {
  const { ItemList } = props;
  console.log(ItemList);

  return (
    <div>
      {ItemList?.map((item: any) => {
        return (
          <div key={item?.card?.info?.id} className="flex justify-between">
            <div className="flex flex-col border-b-2 py-4 gap-2">
              <h2 className="font-normal">{item?.card?.info?.name}</h2>
              <div className="flex gap-2">
                <h6 className="text-xs">₹ {item?.card?.info?.price / 100}</h6>
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
                <button className="relative bg-white border border-green-700 font-bold text-green-500 text-xs rounded p-1.5 top-12 left-8">
                  Add +
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
