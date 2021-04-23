import "./header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="main-header">
      <Link to="/"><h1 className="main-header__title">DP-Games</h1></Link>
    </header>
  );
};

export default Header;
