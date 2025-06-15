import { Link } from "react-router";

const Header = () => {
  return (
    <nav>
      <Link to="/about" className="header-links link">about</Link>
    </nav>
  );
};

export default Header;
