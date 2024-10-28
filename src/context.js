import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isCartShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };
  value.removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };
  value.clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  value.addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  value.incQuantity = (id) => {
    dispatch({ type: "INC_QUANTITY", payload: { id } });
  };
  value.decQuantity = (id) => {
    dispatch({ type: "DEC_QUANTITY", payload: { id } });
  };
  value.handleCartShow = () => {
    dispatch({ type: "TOGGLE_CART" });
  };
  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
