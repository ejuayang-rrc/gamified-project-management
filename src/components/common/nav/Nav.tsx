import NavDesktop from "./children/NavDesktop";
import NavMobile from "./children/NavMobile";
import "./Nav.css";

// Hamburger Menu Functionality taken from:
// https://khuang159.medium.com/creating-a-hamburger-menu-in-react-f22e5ae442cb

function Nav() {
  return(
    <div className="nav-element">
      <NavDesktop />
      <NavMobile />
    </div>
  );
}

export default Nav;