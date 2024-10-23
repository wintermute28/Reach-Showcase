const GoodsItem = (props) => {
  const { mainId, displayName, displayDescription, price, displayAssets } =
    props;
  console.log(props);
  return (
    <div className="card" id={mainId}>
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
        <button className="btn blue">Купить</button>
        <span className="right" style={{ fontSize: "1.6rem" }}>
          {price.regularPrice} V
        </span>
      </div>
    </div>
  );
};

export default GoodsItem;

// {
//     "id": "Wrap_ElegantLily",
//     "type": {
//         "id": "wrap",
//         "name": "Обёртка"
//     },
//     "name": "Любовь и цветы",
//     "description": "Выберите свой стиль.",
//     "rarity": {
//         "id": "Uncommon",
//         "name": "НЕОБЫЧНЫЙ"
//     },
//     "series": {
//         "id": "CreatorCollabSeries",
//         "name": "Звёздная серия"
//     },
//     "images": {
//         "icon": "https://media.fortniteapi.io/images/a478015e5526411620fd2382bd6657fb/transparent.png",
//         "featured": null,
//         "background": "https://media.fortniteapi.io/images/cosmetics/a478015e5526411620fd2382bd6657fb/v2/background.png",
//         "icon_background": "https://media.fortniteapi.io/images/cosmetics/a478015e5526411620fd2382bd6657fb/v2/icon_background.png",
//         "full_background": "https://media.fortniteapi.io/images/cosmetics/a478015e5526411620fd2382bd6657fb/v2/info.ru.png"
//     },
//     "juno": {
//         "icon": null
//     },
//     "beans": {
//         "icon": null
//     },
//     "video": null,
//     "audio": null,
//     "gameplayTags": [
//         "Cosmetics.Filter.Season.31",
//         "Cosmetics.Source.ItemShop",
//         "Cosmetics.Set.LipTherapist",
//         "Cosmetics.UserFacingFlags.Wrap.Animated"
//     ],
//     "set": {
//         "id": "LipTherapist",
//         "name": "Karol G",
//         "partOf": "Входит в набор «Karol G»."
//     }
// },
