import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <span className="navbar-brand mb-1 h1">Lauren Hutchinson</span>
      <button
        className="navbar-toggler"
        style={{ backgroundColor: "black", width: "60px" }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="nav navbar-nav navbar-right justify-content-end">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
