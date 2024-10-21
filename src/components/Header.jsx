const Header = () => {
  return (
    <div>
      <nav className="orange darken-3">
        <div className="nav-wrapper">
          <a href="" className="brand-logo">
            Fortnite Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a target="_blank" href="https://www.imdb.com/" rel="noreferrer">
                IMDb
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.rottentomatoes.com/"
                rel="noreferrer"
              >
                Rotten Tomatoes
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.metacritic.com/"
                rel="noreferrer"
              >
                Metacritic
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
