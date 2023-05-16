import "./checkout.styles.scss";
import CheckoutItem from "../../checkout-item/checkout-item.component";

import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-blocker'>
          <span>Product</span>
        </div>
        <div className='header-blocker'>
          <span>Description</span>
        </div>
        <div className='header-blocker'>
          <span>Quantity</span>
        </div>
        <div className='header-blocker'>
          <span>Price</span>
        </div>
        <div className='header-blocker'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map(cartItem => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
