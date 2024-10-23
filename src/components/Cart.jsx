const Cart = (props) => {
  const { quantity = 0, handleCartShow = Function.prototype } = props;
  return (
    <div onClick={handleCartShow} className="cart blue darken-4 white-text">
      <i className="material-icons ">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
