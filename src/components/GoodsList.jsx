import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((good) => (
        <GoodsItem key={good.mainId} {...good} />
      ))}
    </div>
  );
};

export default GoodsList;
