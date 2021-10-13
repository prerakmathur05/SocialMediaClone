import "./Header.css";
import logo from "./tinderlogo.png";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <IconButton>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>

      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <Link to="/">
        <IconButton>
          <img
            src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
            alt="tinder logo"
            className="header__logo"
          />
        </IconButton>
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
