import { useSelector } from "react-redux";
import RecommendedMenu from "./RecommendedMenu";
import {useDispatch} from "react-redux";
import { clearCart } from "./utils/CartSlice";
import CartList from "./CartList";

const Cart = () => {
  let cartItem = useSelector((store) => store.cart.items);
  let dispatch =useDispatch();
  if(cartItem.length===0)
  {
    return(
        <div className="CartEmpty">
            <p >Cart is empty, Add some Items To the Cart.</p>
        </div>
    )
  }
  return (
    <div className="CartItems-container">
      <div className="CartItems">
        <div className="flex justify-between">
        <h1 className="text-lg font-semibold my-4">Cart</h1>
        <button  className="mx-5 mt-2 text-sm bg-orange-400 text-white h-10 p-2 rounded-2xl" onClick={()=>{
          dispatch(clearCart()); 
        }}>Clear Cart</button>
        </div>
        {cartItem.map((item, index) => (
          <CartList key={index} itemCard={item}/>
        ))}
      </div>
    </div>
  );
};

export default Cart;
