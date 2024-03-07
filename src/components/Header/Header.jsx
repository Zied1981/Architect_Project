import Logo from "../../assets/Logo/Logo";
import LichtIcon from "../../assets/lichtIcon/lichtIcon";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { darkmodeContext } from "../../Context/Context";
import { useContext } from "react";

const Header = () => {
  const { darkmode, setDarkmode } = useContext(darkmodeContext);

  const dark = () => {
    setDarkmode((status) => !status);
  };

  return (
    <header className="head">
      <nav>
        <div className="logoo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div>
          <NavLink to="/">Main</NavLink>

          <NavLink to="/galerie">Gallery</NavLink>
          <NavLink to="/">Projects</NavLink>
          <NavLink to="/">Certification</NavLink>
          <NavLink to="/">Contacts</NavLink>
        </div>
        <div onClick={dark}>
          <LichtIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
