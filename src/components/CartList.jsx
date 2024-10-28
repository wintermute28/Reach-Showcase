import CartItem from "./CartItem";

const CartList = (props) => {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
    clearCart = Function.prototype,
  } = props;

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
          className="secondary-content"
        >
          <i className="material-icons">close</i>
        </span>
      </li>
      {order.length ? (
        order.map((item) => (
          <CartItem
            key={item.mainId}
            {...item}
            removeFromCart={removeFromCart}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li
        title="Очистить корзину"
        className="collection-item active blue darken-3"
      >
        Общая стоимость: {totalPrice} V
        <span
          onClick={() => clearCart()}
          style={{ cursor: "pointer" }}
          className="secondary-content"
        >
          <i className="material-icons white-text">delete_forever</i>
        </span>
      </li>
      <li className="collection-item">
        <button className="secondary-content btn  blue darken-3 left">
          Оформить
        </button>
      </li>
    </ul>
  );
};

export default CartList;
