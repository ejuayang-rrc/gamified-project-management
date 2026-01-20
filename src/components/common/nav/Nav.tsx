import NavDesktop from "./children/NavDesktop";
import NavMobile from "./children/NavMobile";
import "./Nav.css";

function Nav() {
  return(
    <div className="nav-element">
      <NavDesktop />
      <NavMobile />
    </div>
  );
}

export default Nav;
