const CartItem = (props) => {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromCart = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item ">
      {displayName}{" "}
      <i
        className="material-icons blue-text cart-quantity"
        onClick={() => decQuantity(mainId)}
      >
        remove
      </i>
      x{quantity}{" "}
      <i
        className="material-icons blue-text cart-quantity"
        onClick={() => incQuantity(mainId)}
      >
        add
      </i>
      = {price * quantity} V
      <span
        className="secondary-content"
        onClick={() => removeFromCart(mainId)}
      >
        <i className="material-icons blue-text cart-delete">delete</i>
      </span>
    </li>
  );
};

export default CartItem;
