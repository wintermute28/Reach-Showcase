import CartItem from "./CartItem";

const CartList = (props) => {
  const { order = [], handleCartShow = Function.prototype } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection cart-list">
      <li className="collection-item active blue darken-3">
        Корзина
        <span
          style={{ cursor: "pointer" }}
          onClick={handleCartShow}
          class="secondary-content"
        >
          <i class="material-icons">close</i>
        </span>
      </li>
      {order.length ? (
        order.map((item) => <CartItem key={item.mainId} {...item} />)
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li
        title="Очистить корзину"
        className="collection-item active blue darken-3"
      >
        Общая стоимость: {totalPrice} V
        <span style={{ cursor: "pointer" }} class="secondary-content">
          <i class="material-icons white-text">delete_forever</i>
        </span>
      </li>
    </ul>
  );
};

export default CartList;
