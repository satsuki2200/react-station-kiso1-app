import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <p className="title">掲示板</p>
      </Link>
      <Link to="/threads/new" className="NewButton">
        <button>スレッド作成</button>
      </Link>
    </div>
  );
};

export default Header;
