const Footer = () => {
  return (
    <footer className="page-footer blue darken-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} All rights reserved
          <a
            target="_blank"
            className="grey-text text-lighten-4 right"
            href="https://github.com/wintermute28/Reach-Showcase"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
