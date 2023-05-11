import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
//revisarlo
const NavBar = ({ onSearch }) => {
  return (
    <div className={style.nav}>
      <div className={style.search}>
        {" "}
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={style.buttonnav}>
        <Link to="/about">
          <button>
            <h2>About</h2>
          </button>
        </Link>
      </div>
      <Link to="/home">
        <div className={style.buttonnav}>
          <button>
            <h2>Home</h2>
          </button>
        </div>
      </Link>
      <Link to="/favorites">
        <div className={style.buttonnav}>
          <button>
            <h2>Favorites</h2>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
