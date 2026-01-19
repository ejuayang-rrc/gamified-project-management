import Hamburger from "./hamburger/Hamburger";
import "./Nav.css";

function Nav() {
  return(
    <nav>
      <span>
        <a href="#">Home</a>
        <a href="#">Placeholder</a>
        <a href="#">Options</a>
        <a href="#">Account</a>
        <a href="#">Log Out</a>
      </span>

      <div className="hamburger">
        <Hamburger />
      </div>
    </nav>
  );
}

export default Nav;