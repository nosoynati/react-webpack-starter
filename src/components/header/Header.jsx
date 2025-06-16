import { Link } from "react-router";
import './Header.scss'

const Header = () => {
  return (
    <nav className="navigation">
      <Link to="/about" className="header-links link">about</Link>
      <Link to="/contact" className="header-links link">contacto</Link>
    </nav>
  );
};

export default Header;
