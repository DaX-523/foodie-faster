import { useSelector } from 'react-redux';
import ListMenu from './ListMenu';
import { useAppDispatch } from '../common/hooks';
import { clearCart } from '../utils/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const cartItems = useSelector((store: any) => store.cart.items);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="w-6/12 m-auto">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button
          className="my-4 p-2 bg-red-600 text-white rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
          <DeleteIcon />
        </button>
        {cartItems.length === 0 && <h2>No Items in the cart</h2>}
        <ListMenu ItemList={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
