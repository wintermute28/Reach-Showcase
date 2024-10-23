const CartItem = (props) => {
  const { mainId, displayName, price, quantity } = props;

  return (
    <li className="collection-item ">
      {displayName} x{quantity} = {price * quantity} V
      <span href="#!" class="secondary-content">
        <i class="material-icons blue-text cart-delete">delete</i>
      </span>
    </li>
  );
};

export default CartItem;
