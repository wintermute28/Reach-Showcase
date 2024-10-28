import { useState, useContext } from "react";
import { ShopContext } from "../context";
import GoodsItem from "./GoodsItem";

const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext);
  const [pagination, setPagination] = useState(16);
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  const newGoods = goods.slice(0, pagination);

  const handlePagination = () => {
    if (goods.length - pagination < 16) {
      setPagination(goods.length);
    } else {
      setPagination(pagination + 16);
    }
  };

  return (
    <>
      <div className="goods">
        {newGoods.map((good) => (
          <GoodsItem key={good.mainId} {...good} />
        ))}
      </div>
      <div className="pagination-wrapper">
        {pagination === goods.length ? null : (
          <button onClick={handlePagination} className="btn blue pagination">
            Загрузить еще
          </button>
        )}
      </div>
    </>
  );
};

export default GoodsList;
