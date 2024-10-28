const GoodsItem = (props) => {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToCart = Function.prototype,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={displayAssets[0].full_background || displayAssets[0].url}
          alt="card"
        />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() =>
            addToCart({ mainId, displayName, price: price.regularPrice })
          }
          className="btn blue"
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.6rem" }}>
          {price.regularPrice} V
        </span>
      </div>
    </div>
  );
};

export default GoodsItem;
