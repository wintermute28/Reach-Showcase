const Header = () => {
  return (
    <div>
      <nav className="blue darken-3">
        <div className="nav-wrapper">
          <a href="" className="brand-logo">
            Fortnite Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                target="_blank"
                href="https://www.fortnite.com/"
                rel="noreferrer"
              >
                Fortnite
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://store.epicgames.com/"
                rel="noreferrer"
              >
                EGS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
