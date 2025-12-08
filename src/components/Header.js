import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Emma Connelly</h1>
      <nav className="navbar">
        <ul className="menu">
          <li className="menu-item"><Link to="/about">About</Link></li>
          <li className="menu-item">
            <span>Photography</span>
            <ul className="dropdown">
              <li><Link to="/photography" state={{ section: "weddings" }}>Weddings</Link></li>
              <li><Link to="/photography" state={{ section: "sports" }}>Sports</Link></li>
              <li><Link to="/photography" state={{ section: "jewelry" }}>Jewelry</Link></li>
            </ul>
          </li>
          <li className="menu-item"><Link to="/resume">Resume</Link></li>
          <li className="menu-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
