import Links from "./NavLinks";
import "../Nav.css";

function NavDesktop() {
  return(
    <nav className="desktop">
      <h2 className="logo">Logo</h2>
      <Links />
    </nav>
  );
}

export default NavDesktop;
