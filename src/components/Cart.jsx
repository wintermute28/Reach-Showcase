import { useContext } from "react";
import { ShopContext } from "../context";

const Cart = (props) => {
  const { order, handleCartShow } = useContext(ShopContext);
  const quantity = order.length;

  return (
    <div onClick={handleCartShow} className="cart blue darken-4 white-text">
      <i className="material-icons ">shopping_cart</i>
      {quantity ? (
        <span className="cart-quantity">
          <span>{quantity}</span>
        </span>
      ) : null}
    </div>
  );
};

export default Cart;
